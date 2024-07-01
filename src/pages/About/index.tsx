import React from "react";
import { IoLinkSharp } from "react-icons/io5";
import { Section } from "../../components";
import { FcIdea } from "react-icons/fc";
import { PiToolboxFill } from "react-icons/pi";

import ReactIcon from "../../assets/react.svg";
import TypeScriptIcon from "../../assets/typescriptlang-icon.svg";
import TailwindCSSIcon from "../../assets/tailwindcss-icon.svg";
import ReactRouterIcon from "../../assets/reactrouter-icon.svg";
import AXIOSIcon from "../../assets/axios-icon.svg";
import REACTQUERYIcon from "../../assets/react-query-icon.svg";
import VERCELIcon from "../../assets/vercel-icon.svg";
import GITIcon from "../../assets/git-scm-icon.svg";
import GITHUBIcon from "../../assets/github-icon.svg";
import POSTMANIcon from "../../assets/getpostman-icon.svg";

export default React.memo(() => {
  return (
    <div className="flex flex-col gap-5 flex-grow">
     
      <Section
        title="Project"
        subtitle="Summary about project idea"
        icon={<FcIdea size={"25"} />}
        headerClassName="border-b"
      >
        <p>
          Recipeo is a recipe search engine that allows you to search for
          recipes. Recipeo also provides a random recipe feature that allows you
          to discover new recipes. The recipes are fetched from the{" "}
          <a
            href="https://spoonacular.com/food-api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold"
          >
            Spoonacular API
            <IoLinkSharp className="inline mx-1" size={"20"} />.
          </a>
        </p>
      </Section>
      <Section
        title="Technologies & Packages"
        subtitle="Technologies applied in project"
        icon={<PiToolboxFill size={"25"} />}
      >
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-6">
          <li className="flex items-center text-2xl gap-2">
            <img
              src={ReactIcon}
              alt="React"
              className="aspect-square w-8 object-cover"
            />
            React
          </li>
          <li className="flex items-center text-2xl gap-2">
            <img
              src={TailwindCSSIcon}
              alt="Tailwind CSS"
              className="aspect-square w-8 object-cover"
            />
            Tailwind CSS
          </li>
          <li className="flex items-center text-2xl gap-2">
            <img
              src={TypeScriptIcon}
              alt="TypeScript"
              className="aspect-square w-8 object-cover"
            />
            TypeScript
          </li>
          <li className="flex items-center text-2xl gap-2">
            <img
              src={REACTQUERYIcon}
              alt="React Query"
              className="aspect-square w-8"
            />
            React Query
          </li>

          <li className="flex items-center text-2xl gap-2">
            <img
              src={AXIOSIcon}
              alt="Axios"
              className="aspect-square w-8 object-cover"
            />
            Axios
          </li>
          <li className="flex items-center text-2xl gap-2">
            <img
              src={ReactRouterIcon}
              alt="React Router"
              className="aspect-square w-8"
            />
            React Router
          </li>
          <li className="flex items-center text-2xl gap-2">
            <img
              src={VERCELIcon}
              alt="React Router"
              className="aspect-square w-8"
            />
            Vercel
          </li>
          <li className="flex items-center text-2xl gap-2">
            <img
              src={GITIcon}
              alt="React Router"
              className="aspect-square w-8"
            />
            Git
          </li>
          <li className="flex items-center text-2xl gap-2">
            <img
              src={GITHUBIcon}
              alt="React Router"
              className="aspect-square w-8"
            />
            GitHub
          </li>
          <li className="flex items-center text-2xl gap-2">
            <img
              src={POSTMANIcon}
              alt="React Router"
              className="aspect-square w-8"
            />
            Postman
          </li>
        </ul>
      </Section>
      
    </div>
  );
});
