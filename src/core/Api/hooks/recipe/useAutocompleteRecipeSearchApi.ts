import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import type {
  ServerError,
  ApiRequest,
  GetAutocompleteRecipeSearchResponse,
} from "@src/core";
import queryRecipe from "../../services/queryRecipe";

type AutocompleteRecipeSearchRequest = ApiRequest<{ query: string }>;

const useAutocompleteRecipeSearchApi = (
  request: AutocompleteRecipeSearchRequest,
  options?: Omit<
    UseQueryOptions<GetAutocompleteRecipeSearchResponse, ServerError>,
    "queryFn" | "queryKey"
  >
) =>
  useQuery<GetAutocompleteRecipeSearchResponse, ServerError>({
    queryFn: () => queryRecipe.autocompleteRecipeSearch(request),
    queryKey: ["autocompleteRecipeSearch", request.body?.query],
    ...(options ?? {}),
  });

export default useAutocompleteRecipeSearchApi;
