"use client";

import { useContext } from "react";
import { FreeResourcesContext } from "./ContextProvider";

export function useFreeResourcesContext() {
  const context = useContext(FreeResourcesContext);

  if (!context) {
    throw Error("No FreeResourcesContext provider initialized");
  }

  return context;
}

export default useFreeResourcesContext;
