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
          className="rounded  sm:h-7  md:h-8  lg:h-10 lg:text-lg bg-slate-200 w-full pl-1"
          placeholder={e.scope}
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
        className="rounded w-14 sm:w-20 sm:h-7 md:w-24 md:h-8 lg:w-32 lg:h-10 lg:text-lg bg-slate-200 text-center"
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
        className="rounded w-14 sm:w-20 sm:h-7 md:w-24 md:h-8 lg:w-32 lg:h-10 lg:text-lg bg-slate-200 text-center"
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
            <h1 className="text-center pt-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
              ZSC
            </h1>
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
          <button className="bg-yellow-600 text-gray-100 p-1.5 mt-12 sm:w-24 sm:h-11 md:w-32 md:h-12 md:text-xl lg:w-40 lg:h-16 lg:text-2xl">
            CONVERT
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;
