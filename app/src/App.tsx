import React, { useState } from "react";

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

type convertType = {
  [key: string]: number;
};

const convertedRow1: convertType[] = [
  { "1x": 30 },
  { "2x": 40 },
  { "3x": 43 },
  { "5x": 43 },
];

const convertedRow2: convertType[] = [
  { "1.5x": 30 },
  { "2.5x": 40 },
  { "4x": 43 },
  { "12x": 43 },
];

function ConvertRow1(props: { convertedRow1: convertType[] }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mapped = props.convertedRow1.map((e: any, i: number) => {
    return (
      <span key={i}>
        {Object.keys(e)[0]}:{e[Object.keys(e)[0]]}
      </span>
    );
  });
  return <>{mapped}</>;
}

function ConvertRow2(props: { convertedRow2: convertType[] }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mapped = props.convertedRow2.map((e: any, i: number) => {
    return (
      <span key={i}>
        {Object.keys(e)[0]}:{e[Object.keys(e)[0]]}
      </span>
    );
  });
  return <>{mapped}</>;
}

function App() {
  const [converted, setConverted] = useState(false);

  function convertHandler(e: any) {
    e.preventDefault();
    setConverted(true);
  }

  if (converted === false) {
    return (
      <main className="bg-amber-100 h-screen font-source w-full ">
        <div className="header">
          <h1 className="text-center pt-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            ZSC
          </h1>
        </div>
        <form>
          <div className="w-11/12 m-auto">
            <div className="flex flex-wrap justify-between pt-10">
              <FirstRowScopes prop={scopeValue1} />
            </div>
            <div className="flex flex-wrap justify-between pt-8">
              <SecondRowScopes prop={scopeValue2} />
            </div>
            <NonScopeInputs prop={nonScopeInputNames} />
          </div>
          <div className="button-container text-center">
            <button
              onClick={convertHandler}
              className="bg-yellow-600 text-gray-100 p-1.5 mt-12 sm:w-24 sm:h-11 md:w-32 md:h-12 md:text-xl lg:w-40 lg:h-16 lg:text-2xl"
            >
              CONVERT
            </button>
          </div>
        </form>
      </main>
      //result screen
    );
  } else {
    return (
      <main className="bg-amber-100 h-screen font-source w-full">
        <div className="header">
          <h1 className="text-center pt-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            ZSC
          </h1>
        </div>
        <div className="w-11/12 m-auto">
          <h1 className="text-center pt-5 text-2xl font-bold">cm/360</h1>
          <div className="dark-background bg-amber-200 w-80 h-40 m-auto mt-3">
            <div className="flex justify-around">
              <ConvertRow1 convertedRow1={convertedRow1} />
            </div>
            <div className="flex justify-around">
              <ConvertRow2 convertedRow2={convertedRow2} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
