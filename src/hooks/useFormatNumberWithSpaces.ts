import { useCallback } from "react";

export const useFormatNumberWithSpaces = () => {
  return useCallback((value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }, []);
};
