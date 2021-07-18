import React, { useEffect, useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((resp) => {
      console.log(111, resp);
      setTitle(resp.data.title);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
      </header>
    </div>
  );
};

export default App;
