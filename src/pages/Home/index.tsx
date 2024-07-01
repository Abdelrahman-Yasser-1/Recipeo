import { RecipesList, Search } from "../../components";
import React from "react";

export default React.memo(() => {
  return (
    <div className="flex-grow">
      <Search />
      <RecipesList />
    </div>
  );
});
