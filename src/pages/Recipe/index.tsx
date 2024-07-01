import * as React from "react";
import { Img } from "react-image";
import { Balancer } from "react-wrap-balancer";
import useRecipeInformationApi from "../../core/Api/hooks/recipe/useRecipeInformationApi";
import { useParams } from "react-router-dom";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import { Loader } from "../../components";
import Error404 from "../Error404";
import Share from "./Share";
import IngredientsList from "./IngredientsList";
import AnalyzedInstructionsList from "./AnalyzedInstructionsList";

export default React.memo(() => {
  const { recipeId } = useParams();

  const {
    data: recipe,
    isLoading,
    isError,
  } = useRecipeInformationApi(
    {
      body: { id: Number(recipeId) },
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error404 />;
  }

  return (
    <main className="container flex-1 pt-4 flex-grow">
      <article className="space-y-6">
        <header className="space-y-3">
          <Img
            src={recipe?.image ?? ""}
            alt={recipe?.title}
            className="rounded-lg border object-cover w-full max-h-[30rem]"
            unloader={
              <ImagePlaceholder
                alt={recipe?.title ?? ""}
                className="rounded-lg border object-fit w-full max-h-[30rem]"
              />
            }
            loader={
              <ImagePlaceholder
                alt={recipe?.title ?? ""}
                className="rounded-lg border object-fit w-full max-h-[30rem]"
              />
            }
          />
          <h1 className="text-2xl font-bold">
            <Balancer>{recipe?.title}</Balancer>
          </h1>
          <div dangerouslySetInnerHTML={{ __html: recipe?.summary ?? "" }} />
        </header>

        <Share />
        <IngredientsList
          extendedIngredients={recipe?.extendedIngredients ?? []}
        />
        <AnalyzedInstructionsList
          analyzedInstructions={recipe?.analyzedInstructions ?? []}
        />
      </article>
    </main>
  );
});
