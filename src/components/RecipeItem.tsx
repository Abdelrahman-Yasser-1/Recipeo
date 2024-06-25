const RecipeItem = () => {
  return (
    <div className="relative flex w-full max-h-[26rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative  overflow-hidden text-white shadow-lg  bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          className="object-cover w-full"
          src="https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg"
          alt="ui/ux review check"
        />
      </div>
      <div className="p-5 ">
        <div className="flex  justify-between mb-3">
          <h5 className="block font-sans text-2xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            Wooden House, Florida
          </h5>
          <div className="flex flex-row justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="px-1 font-medium ">30 mins</p>
          </div>
        </div>
        <p className=" font-sans text-base antialiased font-light leading-relaxed text-gray-700 line-clamp-2">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 px-5 mb-4">
        <span className="bg-green-100 text-green-800 text-s font-medium  px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
          vegetarian
        </span>
        <span className="bg-green-100 text-green-800 text-s font-medium  px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
          vegan
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-s font-medium  px-3 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
          glutenFree
        </span>
        <span className="bg-gray-100 text-gray-800 text-s font-medium  px-3 py-1 rounded-full dark:bg-gray-900 dark:text-gray-300">
          dairyFree
        </span>
      </div>
    </div>
  );
};
export default RecipeItem;
