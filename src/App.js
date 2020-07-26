import React from "react";
import CharacterState from "./context/characterState";

import Characters from "./components/Charecters";

function App() {
  return (
    <CharacterState>
      <Characters />
    </CharacterState>
  );
}

export default App;
