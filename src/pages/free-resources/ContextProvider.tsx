import React, { Dispatch, SetStateAction, createContext } from "react";

import {
  ContentTypes,
  FreeResourceData,
  CategoryType,
  TitleShowType,
  TagType,
  RightArticleType,
} from "./type";
export interface FreeResourcesContextProps {
  filteredFreeResources: FreeResourceData[];
  handleFilterChange: (filterName: any) => void;
  currentFilter: CategoryType;
  contentTypes: ContentTypes;
  handleTitleTypeClick: (val: TitleShowType) => void;
  titleShowType: TitleShowType;
  breadcrumb: string;
  setTagType: React.Dispatch<React.SetStateAction<keyof typeof TagType | null>>;
  tagType: keyof typeof TagType | null;
  articleType: keyof typeof RightArticleType;
  setArticleType: React.Dispatch<
    React.SetStateAction<keyof typeof RightArticleType>
  >;
  filteredFreeResourcesByArticleType: FreeResourceData[];
}

export const FreeResourcesContext =
  createContext<FreeResourcesContextProps | null>(null);

export interface FreeResourcesContextProviderProps
  extends FreeResourcesContextProps {
  children: React.ReactNode;
}

export const FreeResourcesContextProvider: React.FC<
  FreeResourcesContextProviderProps
> = ({ children, ...rest }) => {
  return (
    <FreeResourcesContext.Provider value={rest}>
      {children}
    </FreeResourcesContext.Provider>
  );
};
