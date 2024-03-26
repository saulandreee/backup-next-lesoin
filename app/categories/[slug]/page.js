import BlogSidebar from "@/components/BlogSidebar";
import { getAllCategoriesData, getSingleCategory } from "@/lib/categories";
import { searchData } from "@/lib/globalSearch";
import { getProjectCategories, getSingleProjectCategory } from "@/lib/projectCategories";
import { cookies } from "next/headers";

import CustomPagination from "@/components/CustomPagination";
import SearchDataCard from "@/components/SearchDataCard";
import Link from "next/link";
import { getProjectsByCategorySlug } from "@/lib/projects";
import { getBlogDataByCategoriesSlug } from "@/lib/blogs";

export default async function GetBlogCategories({ params, searchParams }) {
  var category = await getSingleCategory(undefined, params.slug);
  var data = await getBlogDataByCategoriesSlug(params.slug, searchParams.page || 1);
  // console.log(data.data.length);

  const cookiesStore = cookies();
  var categories = JSON.parse(cookiesStore.get("categories")?.value || "{}");
  var projectCategories = JSON.parse(cookiesStore.get("project_categories")?.value || "{}");

  if (!Object.keys(categories).length) {
    categories = await getAllCategoriesData();
  }

  if (!Object.keys(projectCategories).length) {
    projectCategories = await getProjectCategories();
  }

  return (
    <>
      <div className="py-20 bg-base-darkest-brown text-center">
        <h1 className="font-marcellus text-stone-50 text-xl md:text-2xl lg:text-[32px]">Project Category: {category.name}</h1>
      </div>
      <div className="py-20 flex flex-col lg:flex-row gap-16 mx-auto max-w-[1200px] px-5">
        <div className="flex-1 ">
          {data.pagination.total_items > 0 ? (
            <div className="grid gap-8 mb-8">
              {data.data.map((item, index) => {
                return (
                  <Link
                    href={item.path}
                    key={index}
                  >
                    <SearchDataCard data={item} />
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-base-brown font-karla text-lg italic mb-8">
              Sorry, but nothing matched your search terms. Please try again with some different keywords.
            </p>
          )}
          <CustomPagination
            count={data.pagination.total_pages || 1}
            page={parseInt(searchParams.page) || 1}
          />
        </div>
        <BlogSidebar
          initCategories={categories}
          initProjectCategories={projectCategories}
        />
      </div>
    </>
  );
}
