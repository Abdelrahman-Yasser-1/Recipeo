import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import type {
  ServerError,
  GetRecipeInformationResponse,
  ApiRequest,
} from "@src/core";
import queryRecipe from "../../services/queryRecipe";

// Define the input type separately if needed
type RecipeInformationRequest = ApiRequest<{ id: number }>;

const useRecipeInformationApi = (
  request: RecipeInformationRequest,
  options?: Omit<
    UseQueryOptions<GetRecipeInformationResponse, ServerError>,
    "queryFn" | "queryKey"
  >
) =>
  useQuery<GetRecipeInformationResponse, ServerError>({
    queryFn: () => queryRecipe.recipeInformation(request),
    queryKey: ["recipeInformation", request.body?.id],
    ...(options ?? {}),
  });

export default useRecipeInformationApi;
