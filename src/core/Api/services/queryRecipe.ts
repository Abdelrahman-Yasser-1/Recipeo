import { ApiRequest, AutocompleteRecipeSearch, GetAutocompleteRecipeSearchResponse } from "@src/core";

import GetRandomRecipesResponse from "../responses/GetRandomRecipesResponse";
import GetRecipeInformationResponse from "../responses/GetRecipeInformationResponse";
import httpClient from "../httpClient";

const queryRecipe = {
  randomRecipes: (): Promise<GetRandomRecipesResponse> =>
    httpClient
      .get<GetRandomRecipesResponse>("recipes/random?number=50")
      .then((response) => response.data),

  recipeInformation: (
    request: ApiRequest<{ id: number }>
  ): Promise<GetRecipeInformationResponse> =>
    httpClient
      .get<GetRecipeInformationResponse>(
        `recipes/${request.body?.id}/information`
      )
      .then((response) => response.data),

  autocompleteRecipeSearch: (
    request: ApiRequest<{ query: string }>
  ): Promise<GetAutocompleteRecipeSearchResponse> =>
    httpClient
      .get<AutocompleteRecipeSearch[]>(
        `recipes/autocomplete?number=10&query=${request.body?.query}`
      )
      .then((response) => ({
        recipes: response.data
      })),
};

export default queryRecipe;
