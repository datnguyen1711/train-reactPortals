import React, { useContext, useState } from "react";
import { useBoolean } from "@chakra-ui/react";
import "./App.css";
import { Modal } from "./Modal";
import Content from "./Content";
import Context from "./store/Context";
import Todolist from "./Todolist";
import { toggleTheme } from "./store/action";

function App() {
  const [active, setActive] = useBoolean();
  const [theme, setTheme] = useState("dark");

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    dispatch(toggleTheme(theme));
  };

  const [state, dispatch] = useContext(Context);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-red-500 mt-10 ">
        Đây là trang chủ
      </h1>
      <Content />
      <div className="flex justify-center gap-5">
        <button
          className="mt-[20px] bg-[#ffa400] text-white px-4 py-2 rounded-lg hover:bg-[#ecbb5f]"
          onClick={setActive.toggle}
        >
          Hiện Modal
        </button>
        <button
          className="mt-[20px] bg-[#202786] text-white px-4 py-2 rounded-lg hover:bg-[#2385d4]"
          onClick={handleChangeTheme}
        >
          Đổi Theme
        </button>
      </div>
      {active === true ? <Modal setActive={setActive} /> : <></>}
      <Todolist />
    </div>
  );
}

export default App;
