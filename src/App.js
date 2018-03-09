import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
     <div>
     	<img inline src="src/images/cloud-search.svg"/>
        <p>Webpack 4 with React here!</p>
     </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
