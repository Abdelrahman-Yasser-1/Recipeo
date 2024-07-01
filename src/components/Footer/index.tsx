import React from "react";
import { Link } from "react-router-dom";
import { FaSquareGithub } from "react-icons/fa6";

export default React.memo(() => {
  return (
    <footer className="container mt-4 flex items-center justify-between gap-2 border-t border-border py-4">
      <p className="text-center text-xs text-muted-foreground">
        Copyright &copy; 2024 Recipeo
      </p>

      <a href="https://github.com/Abdelrahman-Yasser-1/Recipeo" target="blank">
        <FaSquareGithub size={30} />
      </a>
    </footer>
  );
});
