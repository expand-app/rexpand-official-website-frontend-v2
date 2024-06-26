import React, { useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import styles from "./index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FreeResourceList, {
  FreeResourceData,
} from "./components/FreeResourceList/FreeResourceList";
import { freeResourceListData } from "@/data/free_resource";
import LinkFilter from "./components/LinkFilter/LinkFilter";
import clsx from "clsx";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";
import { CategoryTitle } from "./constant";
import RightRecommendContent from "./components/RightRecommendContent";

export interface FreeResourcesPageViewProps {
  filteredFreeResources: FreeResourceData[];
  handleFilterChange: (filterName: string) => void;
  currentFilter: string;
}

export const FreeResourcesPage: NextPage = () => {
  const { isMobile } = useScreen();

  const [currentFilter, setCurrentFilter] = useState<string>(
    CategoryTitle.NewArticle
  );
  const handleFilterChange = (filterName: string) => {
    setCurrentFilter(filterName);
  };
  const filteredFreeResources = useMemo(() => {
    if (currentFilter === CategoryTitle.NewArticle) {
      return freeResourceListData;
    } else {
      return freeResourceListData?.filter(
        (item) => item?.tags?.indexOf(currentFilter) != -1
      );
    }
  }, [currentFilter]);

  return (
    <>
      <Head />
      <div>
        {isMobile?.() ? (
          <MobileView
            filteredFreeResources={filteredFreeResources}
            currentFilter={currentFilter}
            handleFilterChange={handleFilterChange}
          />
        ) : (
          <PCView
            filteredFreeResources={filteredFreeResources}
            currentFilter={currentFilter}
            handleFilterChange={handleFilterChange}
          />
        )}
      </div>
    </>
  );
};

function MobileView({
  filteredFreeResources,
  currentFilter,
  handleFilterChange,
}: FreeResourcesPageViewProps) {
  return (
    <div>
      <main className={clsx("m-main", styles.m_main)}>
        <div className={styles.page}>
          <Header theme={Theme.LIGHT} />

          <div className="container mx-auto m-section">
            <div className="py-24px px-20px">
              <LinkFilter
                current={currentFilter}
                data={["全部", "求职规划", "面试技巧", "行业知识"]}
                onChange={handleFilterChange}
              />
            </div>
            <div>
              <FreeResourceList data={filteredFreeResources} />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

function PCView({
  filteredFreeResources,
  currentFilter,
  handleFilterChange,
}: FreeResourcesPageViewProps) {
  return (
    <div>
      <main className={clsx("", styles.main)}>
        <div className={styles.page}>
          <Header theme={Theme.LIGHT} />

          <div className="container mx-auto w-3/4">
            <div className="h-[86px] min-h-[86px]">content</div>
            <div className="pl-2 overflow-auto">
              <LinkFilter
                className={styles.filter}
                current={currentFilter}
                data={Object.values(CategoryTitle)}
                onChange={handleFilterChange}
              />
            </div>
            <div className="pb-12 mt-6 flex space-x-4">
              <FreeResourceList data={filteredFreeResources} />
              <RightRecommendContent></RightRecommendContent>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default FreeResourcesPage;
