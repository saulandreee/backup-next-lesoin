import axios from "axios";
import fs from "fs/promises";
import path from "path";
import { getAllBlogsData } from "./blogs";
import { getAllProducts } from "./products";
import { getAllProjects } from "./projects";
import { v4 as uuidv4 } from "uuid";

const dataFilePath = path.join(process.cwd(), "data/globalData.json");

const readFile = async () => {
  var projects = await fs.readFile(dataFilePath, { encoding: "utf8" });
  projects = JSON.parse(projects);
  return projects;
};

const updateFile = async (arrayProject) => {
  const updatedData = JSON.stringify(arrayProject);
  // write back updated BLOG
  await fs.writeFile(dataFilePath, updatedData);
};

const updateGlobalData = async () => {
  var blogs = await getAllBlogsData("array");
  var products = await getAllProducts("array");
  var projects = await getAllProjects("array");

  var temp = [];

  console.log(blogs[0]);
  console.log(products[0]);
  console.log(projects[0]);

  blogs.forEach((blog) => {
    temp.push({
      type: "blog",
      title: blog.title,
      path: `/${blog.slug}`,
      image: blog.image,
      date: blog.date,
      content: blog.content,
      short_desc: blog.short_content,
    });
  });

  products.forEach((product) => {
    temp.push({
      type: "product",
      title: product.title,
      path: `/products/${product.slug}`,
      image: product.image,
      date: product.date,
      content: product.content,
      short_desc: product.excerpt,
    });
  });

  projects.forEach((project) => {
    temp.push({
      type: "project",
      title: project.title,
      path: `/projects/${project.slug}`,
      image: project.image,
      date: project.date,
      content: project.content,
      short_desc: project.page_description,
    });
  });

  var tempID = uuidv4();

  await updateFile({ last_cache_id: tempID, current_cache_id: tempID, data: temp });
};

export const searchData = async (query, queryFields, with_paging = false, page = 1, per_page = 10) => {
  var globalData = await readFile();
  // console.log(globalData);

  if (globalData.last_cache_id !== globalData.current_cache_id) {
    await updateGlobalData();
    globalData = await readFile();
  }

  var filteredGlobalData = globalData.data.filter((item) => {
    var filtered = true;
    queryFields.forEach((query_field) => {
      if (filtered && item[query_field].includes(query)) {
        filtered = false;
      }
    });
    if (!filtered) return item;
  });

  return {
    data: filteredGlobalData.slice((page - 1) * 10, page * 10),
    pagination: {
      total_page: Math.ceil(filteredGlobalData.length / per_page),
      total_items: filteredGlobalData.length,
    },
  };

  // console.log(blogs);
  // console.log(products);
  // console.log(projects);
};
