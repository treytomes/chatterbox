import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import { Command } from '@tauri-apps/plugin-shell';
import { UAParser } from 'ua-parser-js';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
// import { setPlatform } from "./store/platformSlice";
// when using `"withGlobalTauri": true`, you may use
// const { Command } = window.__TAURI__.shell;

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const platform = useSelector((state: RootState) => state.platform);
  const dispatch = useDispatch<AppDispatch>();

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  async function awsCliTest() {
    let cmd = Command.create('echo', [
      'Hello world!',
    ]);
    
    let result = await cmd.execute();
    console.log(result);

    // console.log('Platform: ', await platform());
    const userAgent = UAParser(navigator.userAgent);
    console.log("user agent:", userAgent);
    
    // dispatch(setPlatform({
    //   name: navigator.userAgent,
    //   version: '1.0.0',
    //   isMobile: false,
    // }));
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <div>
        <p>Platform Name: {platform.os.name}</p>
        <p>Platform Version: {platform.os.version ?? 'N/A'}</p>
        <p>Device type: {platform.device.type}</p>
        {/* <button onClick={updatePlatform}>Update Platform</button>Financial Professional • Husband
        <button onClick={() => dispatch(resetPlatform())}>Reset Platform</button> */}
      </div>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>

      <button onClick={awsCliTest}>test</button>
    </main>
  );
}

export default App;
