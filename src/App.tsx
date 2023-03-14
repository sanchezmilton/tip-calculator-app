import { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="bg-neutral-200 h-screen w-full flex items-end">
      <form className="bg-neutral-50 p-10 w-full rounded-t-3xl">
        <div>
          <div>Bill</div>
          <input type="text" />
        </div>
        <div>
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
        <div>
          <div>Number of People</div>
          <input type="text" />
        </div>
        <div>
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
