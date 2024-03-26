import React from "react";

import "./pageNotFound.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
      <main>
      <h1>4<span><i class="fas fa-ghost" style={{color: "#3432c8c8"}}></i></span>4</h1>
      <h2>Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed</p>
    </main>      
    );
};

export default PageNotFound;