import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="bg-amber-100 h-screen flex items-center justify-center flex-col gap-4">
        <Login />
      </div>
    </>
  );
}

export default App;
