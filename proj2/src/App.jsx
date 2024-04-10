import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumber] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  //use refhook 
  const passwordRef = useRef(null)
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*_";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
     
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClick = useCallback(()=>{
    passwordRef.current?.select()
    try {
      window.navigator.clipboard.writeText(password)

      console.log("copied successfully");
    } catch (error) {
      console.log("unable to copy", error);
    } }
  ,[password])
 useEffect(()=>{
  PasswordGenerator()
 },[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <div
          className="flex w-auto h-10 shadow rounded-md overflow-hidden mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="text" value={password} placeholder="password" readOnly={true} 
          ref={passwordRef} />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600"
          onClick={copyToClick}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{
                setLength(e.target.value)
              }}

              
              
            />
            <label> Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charAllowed"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charAllowed"> Characters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
