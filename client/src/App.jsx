import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import AddNewJournals from "./pages/AddJournals.jsx";

function App() {
  const [screen, setScreen] = useState("login");
  const [entries, setEntries] = useState([]);

  const handleSave = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <>
      {screen === "login" && <Login onLoginSuccess={() => setScreen("home")} />}

      {screen === "home" && (
        <Home entries={entries} onAddNew={() => setScreen("add")} />
      )}

      {screen === "add" && (
        <AddNewJournals onBack={() => setScreen("home")} onSave={handleSave} />
      )}
    </>
  );
}

export default App;
