// import "./App.css";
import { useState } from "react";
import { Tiptap } from "./components/index.js";

function App() {
  const [html, setHTML] = useState()
  return(
    <>
      <Tiptap html={setHTML()} />
      <div>
        {html}
      </div>
    </>
  )
}

export default App;
