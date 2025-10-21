import React, { useState } from "react";
import "../Styles/AddNewJournals.css";

function AddNewJournals({ onBack, onSave }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      type: "text",
      title,
      body,
    };
    onSave(newEntry);
    onBack();
  };

  return (
    <div className="add-journal">
      <h2>Create a New Journal</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Journal title"
          required
        />

        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your thoughts..."
          required
        />

        <button type="submit">Save Journal</button>
      </form>

      <button onClick={onBack} className="back-btn">
        Back
      </button>
    </div>
  );
}

export default AddNewJournals;
