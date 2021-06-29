import React from "react";
import "./index.scss";
import SearchIcon from "@material-ui/icons/Search";
import sendIcon from '../../images/send.svg'
import { Button } from "@material-ui/core";
import SearchBox from '../../SearchBox.js'

const Search = ({input, result, buttonVisible, setInput, search}) => {
  return (
    <form className="search">
        <SearchBox/>
      {result? (<div className="search__result">
        {result}
      </div>) : null}
      {!buttonVisible ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  )
}

export default Search;