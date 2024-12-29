// import "./App.css";
import { useState } from "react";
import { Tiptap } from "./components/index.js";
import parse from 'html-react-parser';

function App() {
  const [html, setHTML] = useState('')

  function updateHTML(html){
    console.log(html);
    
    setHTML(html)
  }
  
  return(
    <>
      <Tiptap updateHTML={updateHTML} />
      <div>
        {parse(html)}
      </div>
    </>
  )
}

export default App;
