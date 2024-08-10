import React, { useState } from "react";
import { ModernModal } from "../src/components/ModernModal";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
        Open Modal
      </button>
      <ModernModal
        size="xlarge"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
        <h1>Hello Modal!</h1>
      </ModernModal>
    </div>
  );
};

export default App;
