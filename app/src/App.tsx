import React from "react";
import "./App.css";

const nonScopeInputNames: object[] = [
  { label: "fov", key: "1" },
  { label: "aspect ratio", key: "2" },
  { label: "x factor", key: "3" },
  { label: "dpi", key: "4" },
  { label: "multiplier", key: "5" },
  { label: "hipfire sens", key: "6" },
];
function NonScopeInputs(props: any) {
  const mapped = props.prop.map((e: any) => {
    return (
      <div className="pt-12">
        <input
          type="text"
          className="rounded bg-slate-200 w-full pl-1"
          placeholder={e.label}
        />
      </div>
    );
  });
  return <>{mapped}</>;
}
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
        <NonScopeInputs prop={nonScopeInputNames} />
      </div>
    </main>
  );
}

export default App;
