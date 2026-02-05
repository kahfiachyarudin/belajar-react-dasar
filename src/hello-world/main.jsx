import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Helloworld from "./Helloworld.jsx";
import Container from "../Container/Container.jsx";
import Table from "../Table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../Form/SearchForm.jsx";
import SayHelloForm from "../Form/SayHelloForm.jsx";
import Counter from "../Form/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Helloworld />
      <Table />
      <AlertButton text="Click Me!" message="Hello from AlertButton!" />

      <MyButton text="Smash Me!" onSmash={() => alert("You Smash me!")} />
      <MyButton text="Hit Me!" onSmash={() => alert("You Hit me!")} />
      <Toolbar onClick={(e) => {
        e.stopPropagation();
        alert("Toolbar clicked!")}} />
      <SearchForm />
      <SayHelloForm />
      <Counter />
    </Container>
  </StrictMode>
);