import axios from "axios";
import fs from "fs/promises";
import path, { resolve } from "path";

const dataFilePath = path.join(process.cwd(), "data/products.json");

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

export const fetchProducts = async () => {
  const product_slug = ["derma-g", "prim-o", "nutri-c"];

  var temp = {};

  var products = product_slug.map(async (slug) => {
    var product = await axios.get(`https://lesoin.id/wp-json/wp/v2/project?slug=/${slug}`);
    product = product.data[0];
    return product;
  });

  await Promise.all(products).then((res) => {
    console.log(res.length);
    res.forEach((product) => {
      if (product?.slug)
        temp[product.slug] = {
          id: product.id,
          slug: product.slug,
          date: product.date,
          title: product.title.rendered,
          content: product.content.rendered,
          excerpt: product.excerpt.rendered,
          image: `/images/desktop/products/${product.slug}.webp`,
        };
    });
  });

  updateFile(temp);
};

export const getListProductPath = async () => {
  try {
    var products = await readFile();

    var temp = [...Object.keys(products).map((slug) => ({ slug: slug }))];
    return temp;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getAllProducts = async (dataType = undefind) => {
  var products = await readFile();
  // console.log(products);
  if (dataType === "array") {
    var temp = [];
    Object.keys(products).forEach((product) => {
      temp.push(products[product]);
    });
    return temp;
  }
  return products;
};

export const getSingleProduct = async (slug) => {
  var projects = await readFile();

  // var keys = Object.keys(projects);
  // var index = keys.findIndex((p_slug) => p_slug === slug);

  try {
    var temp = { ...projects[slug] };
    return temp;
  } catch (error) {
    console.log(error);
    return;
  }
};
