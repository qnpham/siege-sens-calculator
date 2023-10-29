import React from "react";
import "./App.css";

function App() {
  return (
    <main className="bg-amber-100 h-screen font-source w-full ">
      <div className="w-11/12 m-auto">
        <div className="header">
          <h1 className="text-center pt-4 text-3xl font-semibold">ZSC</h1>
        </div>
        <div className="flex flex-wrap justify-between pt-10">
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
        <div className="flex flex-wrap justify-between pt-8">
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
        <div className="pt-12">
          <input
            type="text"
            className="rounded bg-slate-200 w-full pl-1"
            placeholder="fov"
          />
        </div>
        <div className="pt-12">
          <input
            type="text"
            className="rounded bg-slate-200 w-full pl-1"
            placeholder="aspect ratio"
          />
        </div>
        <div className="pt-12">
          <input
            type="text"
            className="rounded bg-slate-200 w-full pl-1"
            placeholder="x factor"
          />
        </div>
        <div className="pt-12">
          <input
            type="text"
            className="rounded bg-slate-200 w-full pl-1"
            placeholder="dpi"
          />
        </div>
        <div className="pt-12">
          <input
            type="text"
            className="rounded bg-slate-200 w-full pl-1"
            placeholder="multiplier"
          />
        </div>
        <div className="pt-12">
          <input
            type="text"
            className="rounded bg-slate-200 w-full pl-1"
            placeholder="hipfire sens"
          />
        </div>
        <div className="button-container text-center">
          <button className="bg-yellow-600 text-gray-100 p-1.5 mt-12">
            CONVERT
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
