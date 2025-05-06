import React from "react";
import Container from "./components/Container";

const App = () => {
  return (
    <main className="bg-[hsl(0,0%,94%)] ">
      <div className="w-full max-w-[1440px] mx-auto h-screen flex items-center justify-center">
        <Container />
      </div>
    </main>
  );
};

export default App;
