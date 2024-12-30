// import "./App.css";
import { useState } from "react";
import { Tiptap } from "./components/index.js";
import parse from 'html-react-parser';

function App() {
  const [html, setHTML] = useState('<p className="outText">Outputs will be shown here<p>')

  function updateHTML(html){
    console.log(html);
    
    setHTML(html)
  }
  
  return(
    <div className="container">
    <div className="leftPanel">
      <h1 className="leftHeading">Tiptap is Amazing</h1>
      <div>
        {parse(html)}
      </div>
    </div>
      <Tiptap updateHTML={updateHTML} />
    </div>
  )
}

export default App;
