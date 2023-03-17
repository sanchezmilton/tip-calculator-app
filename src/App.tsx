import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [numPeople, setNumPeople] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const tipAmountPerson = () => {
    if (
      Boolean(bill) === false ||
      Boolean(percentage) === false ||
      Boolean(numPeople) === false
    )
      return 0;
    else return (bill * (percentage / 100)) / numPeople;
  };
  const inputText = (
    icon: string,
    placeholder: string,
    saveValue: Function
  ) => (
    <input
      className={`w-full rounded-lg border-neutral-400 bg-neutral-100 ${icon} bg-[center_left_1rem] bg-no-repeat px-4 py-2 text-right text-2xl text-neutral-500`}
      type="number"
      placeholder={placeholder}
      onChange={(e) => saveValue(e.target.value)}
    />
  );
  const radioTip = (i: number, value: number) => (
    <label
      className="flex justify-center rounded-md bg-neutral-500 py-2 text-2xl text-white duration-500 hover:cursor-pointer"
      htmlFor={`r${i}`}
    >
      <input
        className="hidden"
        type="radio"
        name="rTip"
        id={`r${i}`}
        value={value}
        onChange={(e) => setPercentage(+e.target.value)}
      />
      {value}%
    </label>
  );
  const resultText = (title: string, subtitle: string, result: number) => (
    <div className="grid grid-cols-2">
      <span className="text-sm text-white">{title}</span>
      <span className="row-span-2 text-right text-3xl text-neutral-400">
        ${result}
      </span>
      <span className="text-xs text-neutral-300">{subtitle}</span>
    </div>
  );
  return (
    <div className="flex h-screen w-full flex-col justify-end bg-neutral-200 font-space-mono text-neutral-300">
      <div className="m-auto py-8">
        <img src="./logo.svg" alt="Logo" />
      </div>
      <form className="flex h-full w-full flex-col justify-between rounded-t-3xl bg-white p-10">
        <div className="w-full">
          <div>Bill</div>
          {inputText("bg-icon-dollar", "0", setBill)}
        </div>
        <div className="w-full">
          <div>Select Tip %</div>
          <div className="grid grid-cols-2 gap-5">
            {radioTip(1, 5)}
            {radioTip(2, 10)}
            {radioTip(3, 15)}
            {radioTip(4, 25)}
            {radioTip(5, 50)}
            {inputText("", "Custom", setPercentage)}
          </div>
        </div>
        <div className="w-full">
          <div>Number of People</div>
          {inputText("bg-icon-person", "0", setNumPeople)}
        </div>
        <div className="flex w-full flex-col gap-7 rounded-xl bg-neutral-500 px-5 pt-8 pb-5">
          {resultText(
            "Tip Amount",
            "/ person",
            Math.round(tipAmountPerson() * 100) / 100
          )}
          {resultText("Total", "/ person", 0)}
          <button className="rounded-md bg-neutral-400 py-2 text-neutral-500">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
