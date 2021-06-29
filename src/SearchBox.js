import React from 'react';
import ScriptTag from 'react-script-tag'
import CustomScriptTag from './CustomScriptTag';

const SearchBox = () =>{
  const onLoad = () => {
    var jb = window.JinaBox;
    jb.init('http://localhost:45678/api/search');
  }
  return(
    <div>
      <h2>Cross Modal Search</h2>
      <h2>Wikipidia Search</h2> 
      <jina-searchbar></jina-searchbar>
      <CustomScriptTag src ="https://unpkg.com/jinabox@0.1.49/dist/jinabox.umd.min.js" onLoad = {onLoad}/>
    </div>
  );
}
 
export default SearchBox;