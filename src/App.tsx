import "./App.scss";

import AppRouter from "./components/App-router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavLink to="/" activeClassName="header-link">
          Departments
        </NavLink>
      </header>
      <main>
        <AppRouter></AppRouter>
      </main>
    </>
  );
}

export default App;
