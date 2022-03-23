import React, { useContext } from "react";
import Context from "./store/Context";

const Paragraph = () => {
  const [state, dispatch] = useContext(Context);
  return (
    <div
      className={`max-w-[500px] mx-auto mt-5 p-5 text-white rounded-lg ${
        state.theme === "dark" ? "bg-red-500" : "bg-slate-500"
      } `}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni beatae
      quia quo, quisquam sit sequi asperiores mollitia explicabo non nostrum
      recusandae dolorum saepe dolore quod ad repudiandae. Nihil, rerum fugit.
    </div>
  );
};

export default Paragraph;
