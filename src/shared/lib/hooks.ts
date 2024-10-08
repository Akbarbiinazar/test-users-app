
import React, { useMemo } from "react";
import { debounce } from "./utils";
import { User } from "@/entities/user/model/types/users";

export const useDebounce = (callback: Function, delay: number) => {
  const debouncedCallback = useMemo(
    () => debounce(callback, delay),
    [callback, delay]
  );
  return debouncedCallback;
};