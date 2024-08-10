import React, { useState } from "react";
import { ModernModal } from "../src/components/ModernModal";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModernModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Hello Modal!</h1>
      </ModernModal>
    </div>
  );
};

export default App;
