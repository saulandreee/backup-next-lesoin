import axios from "axios";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data/project-categories.json");

const readFile = async () => {
  var projects = await fs.readFile(dataFilePath, { encoding: "utf8" });
  projects = JSON.parse(projects);
  return projects;
};

const updateFile = async (arrayProject) => {
  const updatedData = JSON.stringify(arrayProject);
  // write back updated product
  await fs.writeFile(dataFilePath, updatedData);
};

export const fetchProjectCategories = async () => {
  var categories = await axios.get("https://lesoin.id/wp-json/wp/v2/pj-categs");
  categories = categories.data;

  // console.log(categories);
  var temp = categories.map((category) => ({
    id: category.id,
    slug: category.slug,
    name: category.name,
  }));

  var tempObject = {};
  temp.forEach((category) => {
    tempObject[category.slug] = category;
  });

  // console.log(tempObject);
  await updateFile(tempObject);
};

export const readProjectCategories = async () => {
  var projectCategories = await readFile();

  return projectCategories;
};
