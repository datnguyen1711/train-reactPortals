import React from "react";

const Todolist = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 mt-10 ">
        Đây là Todolist
      </h1>
      <ul className="max-w-[500px] mx-auto mt-5 p-5 text-white rounded-lg ">
        <li className="mb-2 bg-red-500 py-3 rounded-lg">Thành Đạt Task</li>
        <li className="mb-2 bg-red-500 py-3 rounded-lg">Thành Đạt Task</li>
      </ul>
    </>
  );
};

export default Todolist;
