import { useState } from "react";
import "./App.css";

function App() {
  const inputText = () => (
    <input
      className="text-right w-full bg-neutral-100"
      type="number"
      placeholder="0"
    />
  );
  return (
    <div className="bg-neutral-200 h-screen w-full flex flex-col justify-end">
      <div>SPLITTER</div>
      <form className="bg-neutral-50 p-10 w-full rounded-t-3xl">
        <div className="w-full">
          <div>Bill</div>
          {inputText()}
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
          <input type="text" />
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
