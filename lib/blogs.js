import axios from "axios";
import { read } from "fs";
import fs from "fs/promises";
import path from "path";
import { getSingleCategory } from "./categories";

const dataFilePath = path.join(process.cwd(), "data/blogs.json");

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

export const fetchBlogsData = async () => {
  var blogs = await axios.get("https://lesoin.id/wp-json/wp/v2/posts?per_page=100");
  blogs = blogs.data;

  var temp = blogs.map(async (blog) => {
    var tempBlog = {
      id: blog.id,
      slug: blog.slug,
      title: blog.title.rendered,
      date: blog.modified_gmt,
      content: blog.content.rendered,
      short_content: blog.excerpt.rendered,
      image: "/images/placeholder.webp",
    };

    var tempCategories = blog.categories.map(async (category_id) => {
      var res = await getSingleCategory(category_id);
      return res;
    });

    await Promise.all(tempCategories).then((res) => {
      tempBlog.categories = res;
    });

    return tempBlog;
  });

  var blogs = await Promise.all(temp);

  var tempObject = {};
  blogs.forEach((blog) => {
    tempObject[blog.slug] = blog;
  });

  updateFile(tempObject);
};

export const getAllBlogsData = async () => {
  var blogs = await readFile();
  return blogs;
};

export const getSingleBlogData = async (slug) => {
  var blogs = await readFile();
  return blogs[slug];
};

export const updateBlogsData = async (data) => {};
