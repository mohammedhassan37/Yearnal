import { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import AddNewJournals from "./pages/AddJournals.jsx";

function App() {
  const [page, setPage] = useState("login"); // start on Login
  const [entries, setEntries] = useState([]);

  const handleSave = (entry) => {
    setEntries((prev) => [...prev, entry]);
    setPage("home"); // go back home after saving
  };

  return (
    <>
      {/* tiny dev nav so you can jump around without logging in */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: 12,
          borderBottom: "1px solid #eee",
        }}
      >
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("add")}>Add Journal</button>
      </div>

      {page === "login" && <Login onLoginSuccess={() => setPage("home")} />}

      {page === "home" && (
        <Home entries={entries} onAddNew={() => setPage("add")} />
      )}

      {page === "add" && (
        <AddNewJournals onSave={handleSave} onBack={() => setPage("home")} />
      )}
    </>
  );
}

export default App;
