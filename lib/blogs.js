import axios from "axios";
import { read } from "fs";
import fs from "fs/promises";
import path from "path";
import { getSingleCategory } from "./categories";
import _ from "lodash";

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

export const getListBlogPaths = async () => {
  try {
    var blogs = await readFile();

    var temp = [...Object.keys(blogs).map((slug) => ({ slug: slug }))];
    return temp;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getAllBlogsData = async (dataType = undefined) => {
  var blogs = await readFile();
  if (dataType === "array") {
    if (dataType === "array") {
      var temp = [];
      Object.keys(blogs).forEach((blog) => {
        temp.push(blogs[blog]);
      });
      return temp;
    }
  }
  return blogs;
};

export const getSingleBlogData = async (slug) => {
  var blogs = await readFile();

  var keys = Object.keys(blogs);
  var index = keys.findIndex((p_slug) => p_slug === slug);
  var next, prev;
  if (index === 0) {
    (prev = undefined), (next = { ...blogs[keys[index + 1]] });
  } else if (index === keys.length - 1) {
    (next = undefined), (prev = { ...blogs[keys[index - 1]] });
  } else {
    next = { ...blogs[keys[index + 1]] };
    prev = { ...blogs[keys[index - 1]] };
  }
  var temp = { ...blogs[slug], next: { title: next?.title, slug: next?.slug }, prev: { title: prev?.title, slug: prev?.slug } };

  return temp;
};

export const getMoreBlogData = async (limit, except) => {
  var blogs = await readFile();
  var temp = [];
  Object.keys(blogs).forEach((blog) => {
    if (!except.includes(blog)) {
      var blogObj = blogs[blog];
      temp.push({ title: blogObj.title, slug: blogObj.slug, image: blogObj.image });
    }
  });

  return _.sampleSize(temp, limit);
};

export const updateBlogsData = async (data) => {};
