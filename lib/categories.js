import axios from "axios";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data/categories.json");

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

export const fetchCategoriesData = async () => {
  var categories = await axios.get("https://lesoin.id/wp-json/wp/v2/categories");
  categories = categories.data;

  var temp = categories.map((category) => ({
    id: category.id,
    slug: category.slug,
    name: category.name,
  }));

  var tempObject = {};
  temp.forEach((category) => {
    tempObject[category.slug] = category;
  });

  updateFile(tempObject);
};

export const getAllCategoriesData = async () => {
  var categories = await readFile();
  delete categories.uncategorized;
  return categories;
};

export const getSingleCategory = async (id = undefined, slug = undefined) => {
  var categories = await readFile();
  if (id) {
    var temp = undefined;
    Object.keys(categories).forEach((category) => {
      if (temp?.id) return;
      else if (categories[category].id === id) {
        temp = categories[category];
        // console.log(categories[category]);
      }
    });
    return temp;
  } else if (slug) {
    temp = categories[slug];
    return temp;
  }
};

export const updateBlogsData = async (data) => {};
