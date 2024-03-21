import BlogSidebar from "@/components/BlogSidebar";
import { getAllCategoriesData } from "@/lib/categories";
import { searchData } from "@/lib/globalSearch";
import { getProjectCategories } from "@/lib/projectCategories";
import { cookies } from "next/headers";

import CustomPagination from "@/components/CustomPagination";
import SearchDataCard from "@/components/SearchDataCard";

export default async function Search({ params, searchParams }) {
  var data = await searchData(searchParams.q, ["title", "content"], true, searchParams.page || 1, 10);
  console.log(data.pagination);
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
        <h1 className="font-marcellus text-stone-50 text-xl md:text-2xl lg:text-[32px]">
          {data.pagination.total_items} search result for: {searchParams.q}
        </h1>
      </div>
      <div className="py-20 flex flex-col lg:flex-row gap-16 mx-auto max-w-[1200px] px-5">
        <div className="flex-1">
          <div className="grid gap-4">
            {data.data.map((item, index) => {
              return (
                <SearchDataCard
                  data={item}
                  key={index}
                />
              );
            })}
          </div>

          <CustomPagination
            count={data.pagination.total_page}
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
