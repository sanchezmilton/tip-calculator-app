import { useState } from "react";
import "./App.css";

function App() {
  const inputText = (icon: string) => (
    <input
      className={`w-full rounded-lg bg-neutral-100 ${icon} bg-[center_left_1rem] bg-no-repeat px-4 py-2 text-right text-xl text-neutral-500`}
      type="number"
      placeholder="0"
    />
  );
  const radioSelect = () => <input type="radio" name="" id="" />;
  return (
    <div className="flex h-screen w-full flex-col justify-end bg-neutral-200 font-space-mono text-neutral-400">
      <div className="m-auto">
        <img src="./logo.svg" alt="Logo" />
      </div>
      <form className="w-full rounded-t-3xl bg-white p-10">
        <div className="w-full">
          <div>Bill</div>
          {inputText("bg-icon-dollar")}
        </div>
        <div className="w-full">
          <div>Select Tip %</div>
          <div>
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="text" />
          </div>
        </div>
        <div className="w-full">
          <div>Number of People</div>
          {inputText("bg-icon-person")}
        </div>
        <div className="w-full">
          <div>
            <span>Tip Amount</span>
            <span>/ person</span>
            <span>{/* TIP AMOUNT VAR */}</span>
          </div>
          <div>
            <span>Total</span>
            <span>/ person</span>
            <span>{/* TOTAL VAR */}</span>
          </div>
          <button>RESET</button>
        </div>
      </form>
    </div>
  );
}

export default App;
