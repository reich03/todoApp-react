import React from "react";

export default function Options() {
  return (
    <div className="flex justify-between mx-auto  w-[80%] md:w-[60%] my-10">
      <h2 className="text-sm text-[#5485A5] font-bold ">
        Tareas Creadas{" "}
        <span className="rounded-lg bg-[#333331] px-2 py-1 text-white">2</span>
      </h2>

      <h2 className="text-sm text-[#5F61C6] font-bold">
        Completadas{" "}
        <span className="rounded-lg bg-[#333331] px-2 py-1 text-white">
          0 de 2
        </span>
      </h2>
    </div>
  );
}
