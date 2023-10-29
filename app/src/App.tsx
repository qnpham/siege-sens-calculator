import React from "react";
import "./App.css";

type customInputType = {
  prop: { scope: string; key: string }[];
};

const nonScopeInputNames = [
  { scope: "fov", key: "1" },
  { scope: "aspect ratio", key: "2" },
  { scope: "x factor", key: "3" },
  { scope: "dpi", key: "4" },
  { scope: "multiplier", key: "5" },
  { scope: "hipfire sens", key: "6" },
];
function NonScopeInputs(props: customInputType) {
  const mapped = props.prop.map((e: any) => {
    return (
      <div className="pt-12" key={e.key}>
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

const scopeValue1 = [
  { scope: "1x", key: "1" },
  { scope: "1.5x", key: "2" },
  { scope: "2x", key: "3" },
  { scope: "2.5x", key: "4" },
];

function FirstRowScopes(props: customInputType) {
  const mapped = props.prop.map((e: any) => {
    return (
      <input
        type="text"
        className="rounded w-14 bg-slate-200 text-center"
        placeholder={e.scope}
        key={e.key}
      />
    );
  });
  return <>{mapped}</>;
}

const scopeValue2 = [
  { scope: "3x", key: "1" },
  { scope: "4x", key: "2" },
  { scope: "5x", key: "3" },
  { scope: "12x", key: "4" },
];

function SecondRowScopes(props: customInputType) {
  const mapped = props.prop.map((e: any) => {
    return (
      <input
        type="text"
        className="rounded w-14 bg-slate-200 text-center"
        placeholder={e.scope}
        key={e.key}
      />
    );
  });
  return <>{mapped}</>;
}

function App() {
  return (
    <main className="bg-amber-100 h-screen font-source w-full ">
      <form>
        <div className="w-11/12 m-auto">
          <div className="header">
            <h1 className="text-center pt-4 text-3xl font-semibold">ZSC</h1>
          </div>

          <div className="flex flex-wrap justify-between pt-10">
            <FirstRowScopes prop={scopeValue1} />
          </div>
          <div className="flex flex-wrap justify-between pt-8">
            <SecondRowScopes prop={scopeValue2} />
          </div>
          <NonScopeInputs prop={nonScopeInputNames} />
        </div>
        <div className="button-container text-center">
          <button className="bg-yellow-600 text-gray-100 p-1.5 mt-12">
            CONVERT
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;
