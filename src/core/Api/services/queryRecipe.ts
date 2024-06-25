import {
  ApiRequest,
} from "@src/core";
import { RecipeInfoBody } from "./queryRecipe.types";

import GetRandomRecipesResponse from '../responses/GetRandomRecipesResponse';
import GetRecipeInformationResponse from '../responses/GetRecipeInformationResponse';
import httpClient from '../httpClient';

const queryRecipe = {
  randomRecipes: (): Promise<GetRandomRecipesResponse> =>
    httpClient
      .get<GetRandomRecipesResponse>("recipes/random?number=30")
      .then((response) => response.data),

  recipeInformation: (
    request: ApiRequest<RecipeInfoBody>
  ): Promise<GetRecipeInformationResponse> =>
    httpClient
      .get<GetRecipeInformationResponse>(
        `recipes/${request.body?.id}/information`
      )
      .then((response) => response.data),
};

export default queryRecipe;
