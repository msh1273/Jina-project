import React, {useState} from 'react';
import {Home} from '../../component';

const HomeContainer = ({hideButtons = false}) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [buttonVisible, setButtonVisible] = useState(hideButtons);

  const search = async (e) => {
    e.preventDefault();
    // window.location.href = "/search"
    console.log("You hit search", input);
    setResult("nono")
    setButtonVisible(true)
    
    // Show the result
    // let result = await gpt3.getSnippetPrediction(input)
    // console.log(result.data.answer)
    // setResult(result.data.answer)
    
  };
  return (
    <Home
    input={input}
    result={result}
    buttonVisible={buttonVisible}
    setInput={setInput}
    search={search}
    />
  );
}
export default HomeContainer;