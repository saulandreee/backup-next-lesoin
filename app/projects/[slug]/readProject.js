import projects from "./projects.json";

export const getListProjectsPath = () => {
  var temp = [...Object.keys(projects).map((slug) => ({ slug: slug }))];

  return temp;
};

export const getSingleProject = (slug) => {
  return projects[slug];
};
