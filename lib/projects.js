import axios from "axios";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data/projects.json");

const readFileProject = async () => {
  var projects = await fs.readFile(dataFilePath, { encoding: "utf8" });
  projects = JSON.parse(projects);
  return projects;
};

const updateFileProject = async (arrayProject) => {
  const updatedData = JSON.stringify(arrayProject);
  // write back updated product
  await fs.writeFile(dataFilePath, updatedData);
};

export const getListProjectsPath = async () => {
  try {
    var projects = await readFileProject();

    var temp = [...Object.keys(projects).map((slug) => ({ slug: slug }))];
    return temp;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getSingleProject = async (slug) => {
  var projects = await readFileProject();

  var keys = Object.keys(projects);
  var index = keys.findIndex((p_slug) => p_slug === slug);
  var next, prev;
  if (index === 0) {
    (prev = undefined), (next = { ...projects[keys[index + 1]] });
  } else if (index === keys.length - 1) {
    (next = undefined), (prev = { ...projects[keys[index - 1]] });
  } else {
    next = { ...projects[keys[index + 1]] };
    prev = { ...projects[keys[index - 1]] };
  }

  var temp = { ...projects[slug], next: { title: next?.title, slug: next?.slug }, prev: { title: prev?.title, slug: prev?.slug } };

  return temp;
};

export const updateSingleProject = async (slug, remoteSlug = undefined) => {
  console.log(slug);
  var projects = await readFileProject();

  var resProject = await axios.get(`https://lesoin.id/wp-json/wp/v2/project?slug=/${remoteSlug ? remoteSlug : slug}`);
  resProject = resProject.data[0];
  console.log(resProject);
  var temp = {
    ...projects[slug],
    date: resProject.date,
    date_modified: resProject.modified,
    slug: slug,
    content: resProject.content.rendered,
    categories: resProject["pj-categs"],
  };
  var tempCategories = temp.categories.map(
    (category_id) =>
      new Promise((resolve, reject) => {
        axios.get(`https://lesoin.id/wp-json/wp/v2/pj-categs/${category_id}`).then((res) => {
          console.log(res.data);
          console.log({ id: category_id, name: res.data.name, slug: res.data.slug });
          resolve({ id: category_id, name: res.data.name, slug: res.data.slug });
        });
      })
  );

  await Promise.all(tempCategories).then((res) => {
    temp.categories = res;
  });

  await updateFileProject({ ...projects, [slug]: temp });
};

export const getCategory = (id = undefined, slug = undefined) => {};
