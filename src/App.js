import "./App.css";
import { useState } from "react";
import { Header, About, Portfolio, Contact, Resume } from "./components";

const App = () => {
  const [page, setPage] = useState("about");

  return (
    <>
      <Header setPage = {setPage} />
      {page == "about" ? (
        <About />
      ) : page == "portfolio" ? (
        <Portfolio />
      ) : page == "contact" ? (
        <Contact />
      ) : (
        <Resume />
      )}
    </>
  );
};

export default App;
