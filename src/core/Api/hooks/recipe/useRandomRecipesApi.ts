import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import type {
  ServerError,
  GetRandomRecipesResponse,
} from "@src/core";
import queryRecipe from "../../services/queryRecipe";

const useRandomRecipesApi = (
  options?: Omit<
    UseQueryOptions<GetRandomRecipesResponse, ServerError>,
    "queryFn" | "queryKey"
  >
) =>
  useQuery<GetRandomRecipesResponse, ServerError>({
    queryFn: queryRecipe.randomRecipes,
    queryKey: ["randomRecipes"],
    ...(options ?? {}),
  });

export default useRandomRecipesApi;
