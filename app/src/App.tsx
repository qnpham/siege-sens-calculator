import React from "react";
import "./App.css";

function App() {
  return (
    <main className="bg-amber-100 h-screen font-source ">
      <div className="header">
        <h1 className="text-center pt-4 text-3xl font-semibold">ZSC</h1>
      </div>
      <div className="flex flex-wrap justify-around pt-10">
        <input
          type="text"
          className="rounded w-14 bg-slate-200 text-center"
          placeholder="1x"
        />
        <input
          type="text"
          className="rounded w-14 bg-slate-200 text-center"
          placeholder="1.5x"
        />
        <input
          type="text"
          className="rounded w-14 bg-slate-200 text-center"
          placeholder="2x"
        />
        <input
          type="text"
          className="rounded w-14 bg-slate-200 text-center"
          placeholder="2.5x"
        />
      </div>
      <div className="flex flex-wrap justify-around pt-8">
        <input
          type="text"
          className="rounded w-14 bg-slate-200 text-center"
          placeholder="3x"
        />
        <input
          type="text"
          className="rounded w-14 bg-slate-200 text-center"
          placeholder="4x"
        />
        <input
          type="text"
          className="rounded w-14 bg-slate-200 text-center"
          placeholder="5x"
        />
        <input
          type="text"
          className="rounded w-14 bg-slate-200 text-center"
          placeholder="12x"
        />
      </div>
    </main>
  );
}

export default App;
