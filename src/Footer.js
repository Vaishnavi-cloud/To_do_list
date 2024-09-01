import React from "react";

function Footer({ length }) {
  const year = new Date();

  return (
    <footer>
      Copyright &copy; {year.getFullYear()} and the year is {length}
      {length === 1 ? "item" : "items"}
    </footer>
  );
}

export default Footer;
