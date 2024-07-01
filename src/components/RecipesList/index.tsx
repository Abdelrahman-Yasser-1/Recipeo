import { useRandomRecipesApi } from "../../core/Api/hooks/recipe";
import React from "react";
import RecipeItem from "../RecipeItem";
import Loader from "../Loader";

export default React.memo(() => {
  const { data, isLoading } = useRandomRecipesApi({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
      {data?.recipes.map((recipe) => {
        return <RecipeItem key={recipe.id} {...recipe} />;
      })}
    </div>
  );
});
