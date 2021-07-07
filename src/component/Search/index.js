import React from "react";
import "./index.scss";
import SearchIcon from "@material-ui/icons/Search";
import sendIcon from '../../images/send.svg'
import { Button } from "@material-ui/core";
import SearchBox from '../../SearchBox.js'

const Search = ({input, result, buttonVisible, setInput, search}) => {
  return (
    <form className="search">
        {/* <SearchBox/> */}
        <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <img src={sendIcon} onClick={search} alt="search"/>
      </div> 
      
      {!buttonVisible ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
          <Button variant="outlined" type="submit" onClick={search}>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">

        </div>
      )}
    </form>
  )
}

export default Search;