import React from "react";
import "../Styles/Home.css";

function Home() {
  const entries = [];
  return (
    <div className="home">
      <div className="home-container">
        <header className="toolbar">
          <input
            type="text"
            placeholder="Search Journals..."
            className="search-input"
          />

          <button className="new-entry-btn">Add new Journals</button>
        </header>

        <main className="masonry">
          {entries.length === 0 ? (
            <div className="empty-state">
              <h2>Your Journal is empty</h2>
              <p>Start by creating your first Journal!</p>
            </div>
          ) : (
            entries.map((entry) => (
              <article key={entry.id} className="card">
                {entry.type === "image" ? (
                  <img
                    src={entry.coverUrl}
                    alt={entry.title}
                    className="card-img"
                  />
                ) : (
                  <div className="card-text">
                    <h3>{entry.title}</h3>
                    <p>{entry.body}</p>
                  </div>
                )}
              </article>
            ))
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;
