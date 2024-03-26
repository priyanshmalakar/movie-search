// importion
import React, { useEffect, useState } from "react";
import "./heroBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { Img, ContentWrapper } from "../../../components/component";

// react component
const HeroBanner = () => {
  const navigate = useNavigate();
  // hooks
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  // redux hooks
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch(`/movie/upcoming`);
  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg?bg:'');
  }, [data]);

  // handler functions
  const onChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`search/${query}`);
    }
  };

  // html
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img src={background} />
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBanner-content">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Begin your adventure to explore a world of movies and TV shows. 
          </span>
            <span className="subTitle" style={{marginBottom:'40px'}}>Explore now 🍿</span>
          <div className="searchInput">
            <input
              onKeyUp={searchQueryHandler}
              onChange={onChange}
              type="text"
              value={query}
              placeholder="Search for any movie or Tv series..."
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
