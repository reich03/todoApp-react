import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function ListTask() {
  return (
    <div className="">
      <div className="flex items-center justify-between mx-auto w-[80%] md:w-[60%]  bg-[#262626] shadow-md px-3 py-4 rounded-lg cursor-pointer">
        <h2 className="text-white">ejemplo texto Tarea</h2>
        <div className="flex flex-row gap-2">
          <FaRegTrashCan className="text-gray-500 hover:text-red-500" />
          <IoCheckmarkCircleOutline className="text-gray-500 hover:text-green-500" />
        </div>
      </div>
    </div>
  );
}
