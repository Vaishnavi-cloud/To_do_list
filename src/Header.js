import React from "react";

const Header = ({ title }) => {
  //background and color such as 2 properties are passed.
  // const headerStyle = { backgroundColor: "black", color: "pink" };
  return (
    //style==attribute  and headerStyle is paased to that attribute it si mentioed above or else it can be passed as an inline argument.
    // <header style={headerStyle}>

    //inline function
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = { title: "TO DO LIST" };

export default Header;
