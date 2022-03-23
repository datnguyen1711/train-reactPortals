import React, { useRef } from "react";
import ReactDOM from "react-dom";

export const Modal = ({ setActive }) => {
  const inputRef = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };
  return ReactDOM.createPortal(
    <div className="top-0 left-0 bottom-0 right-0 fixed bg-[#2f1577a6] flex justify-center items-center">
      <div className=" min-w-[500px] min-h-[300px] bg-[#2d1f7a] rounded-lg p-11 cursor-auto">
        <form onSubmit={handleSubmitForm}>
          <label className="block">
            <span className="block text-sm font-medium text-white">Todos</span>
            <input
              type="text"
              ref={inputRef}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
          <div className="flex justify-center mt-[40px]">
            <button
              type="submit"
              value="Submit"
              className=" bg-[#6956d4] text-white px-6 py-2 rounded-lg hover:bg-[#ecbb5f] block m-auto"
            >
              {" "}
              Submit
            </button>
            <button
              type="button"
              onClick={setActive.toggle}
              className="bg-[#a03b22] text-white px-6 py-2 rounded-lg hover:bg-[#ca3d1a] block m-auto"
            >
              {" "}
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.querySelector("body")
  );
};
