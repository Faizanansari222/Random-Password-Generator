import { use, useCallback, useEffect, useState } from "react";

function App() {
  const [cher, setCher] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passowrd, setPassword] = useState("");

  useEffect(() => {
    passwordHendler();
  }, [cher]);

  const passwordHendler = useCallback(() => {
    let pass = "";
    let symbols = "!@#$%^&*(){}[]";
    let numbers = "1234567890";
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for (let i = 0; i < cher; i++) {
  pass += chars[Math.floor(Math.random() * chars.length)];
}
    setPassword(pass);
  }, [cher, number, symbol, setPassword]);
  const handleCher = (e) => {
    setCher(e.target.value);
  };

  return (
    <>
      <div className="bg-slate-900   h-screen p-5">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-bold text-center text-white text-3xl">
            Password Automation
          </h1>
          <div className="text-white space-y-5 mx-auto text-center p-4  bg-slate-700">
            <input
              value={passowrd}
              className="w-[80%] bg-slate-500 p-2 font-bold text-lg  px-3 rounded-l-xl "
              type="text"
              placeholder="Password Generate"
              disabled
            />
            <button className="hover:bg-slate-800 cursor-pointer bg-slate-900 text-lg p-2 px-3 rounded-r-xl">
              Copy
            </button>
            <div className="flex text-lg  items-center justify-around">
              <div className="space-x-2 flex items-center">
                <label className="">character:</label>
                <input onChange={handleCher} type="range" min="8" max="20" />
                <label className="w-4">{cher}</label>
              </div>
              <div className="space-x-2">
                <input className="" type="checkbox" />
                <label>Numbers</label>
              </div>
              <div className="space-x-2">
                <input onChange={(prev)=>!prev} type="checkbox" />
                <label>symbols</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
