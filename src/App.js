import "./App.css";
import { useState } from "react";
import { Header, About, Portfolio, Contact, Resume, Footer } from "./components";

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

        <Footer />
    </>
  );
};

export default App;
