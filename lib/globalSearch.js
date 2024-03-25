import axios from "axios";
import fs from "fs/promises";
import path from "path";
import { getAllBlogsData } from "./blogs";
import { getAllProducts } from "./products";
import { getAllProjects } from "./projects";
import { v4 as uuidv4 } from "uuid";
import _, { forEach } from "lodash";

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

  // console.log(blogs[0]);
  // console.log(products[0]);
  // console.log(projects[0]);

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
      short_desc: project.excerpt,
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

  var temp = {};
  queryFields.forEach((field) => (temp[field] = []));

  // console.log(temp);

  globalData.data.forEach((item) => {
    var added = false;
    queryFields.forEach((field) => {
      if (!added && item[field].toLowerCase().includes(query.toLowerCase())) {
        temp[field] = [...temp[field], item];
        added = true;
      }
    });
  });

  var tempArray = [];
  queryFields.forEach((field) => (tempArray = [...tempArray, ...temp[field]]));
  // console.log(tempArray);

  // console.log(tempArray.length / per_page);
  return {
    data: tempArray.slice((page - 1) * 10, page * 10),
    pagination: {
      total_page: Math.ceil(tempArray.length / per_page) || 1,
      total_items: tempArray.length,
    },
  };

  // console.log(blogs);
  // console.log(products);
  // console.log(projects);
};
