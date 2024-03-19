import fs from "fs/promises";
import _ from "lodash";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data/mailinglist.json");

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

export const addEmailToList = async (email) => {
  var mailinglist = await readFile();
  // console.log(mailinglist);
  mailinglist.push(email);

  updateFile(_.uniq(mailinglist));
};
