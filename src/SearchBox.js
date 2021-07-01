import React from 'react';
import ScriptTag from 'react-script-tag'
import CustomScriptTag from './CustomScriptTag';

const SearchBox = () =>{
  const onLoad = () => {
    var jb = window.JinaBox;
    jb.init('https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search');
  }
  return(
    <div>
    <div>
      <jina-searchbar></jina-searchbar>

      <CustomScriptTag src ="https://unpkg.com/jinabox@0.1.49/dist/jinabox.umd.min.js" onLoad = {onLoad}/>
    </div>
    <hr/>
    </div>
  );
}
 
export default SearchBox;