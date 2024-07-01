import React, { useEffect, useState } from "react";
import Input from "../Input";
import { ImSearch } from "react-icons/im";
import {
  AutocompleteRecipeSearch,
  useAutocompleteRecipeSearchApi,
} from "../../core";
import { Link } from "react-router-dom";

export default React.memo(() => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<AutocompleteRecipeSearch[]>(
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const { data: autocompleteData } = useAutocompleteRecipeSearchApi(
    {
      body: { query: searchQuery },
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  useEffect(() => {
    setSearchResult(autocompleteData?.recipes || []);
  }, [autocompleteData]);

  console.log({ autocompleteData });

  return (
    <div className="relative my-3 flex flex-row gap-3 items-center justify-center">
      <Input
        label="Search"
        type="text"
        placeholder=" "
        onChange={onChange}
        onBlur={() => {
          setSearchQuery("");
        }}
      />
      <div className="rounded-lg border aspect-square w-[47.14px] flex items-center justify-center">
        <ImSearch />
      </div>

      <div className="absolute w-full z-50 top-[3.3rem] max-h-56">
        <ul className="border border-gray-200 rounded shadow-md max-h-56 overflow-scroll overflow-x-hidden">
          {searchResult?.map((recipe: AutocompleteRecipeSearch, _) => (
            <Link to={`/recipe/${recipe.id}`}>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 cursor-pointer" key={recipe.id}>
                {recipe.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
});
