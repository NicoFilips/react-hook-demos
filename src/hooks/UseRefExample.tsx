import React, { useRef } from "react";

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null); // Erstellt eine Referenz zu einem Input-Element

  const focusInput = () => {
    inputRef.current?.focus(); // Zugriff auf das DOM-Element
  };

  return (
    <div>
      <h2>useRef Beispiel</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Klick auf den Button für Fokus"
      />
      <button onClick={focusInput}>Fokus setzen</button>
    </div>
  );
};

export default UseRefExample;
