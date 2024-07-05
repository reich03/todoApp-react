import { IoIosAddCircleOutline } from "react-icons/io";

export default function CreateTask() {
  return (
    <>
      <div className="relative flex justify-center top-[-1.5rem] gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Agregar Nueva Tarea"
          className="px-4 rounded-lg bg-[#262626] shadow-md w-[50%] border border-slate-700/50 "
        />

        <button className="p-3 bg-[#126b9b] hover:bg-[#1D719D] rounded-lg text-white flex items-center justify-center gap-2 font-bold">
          Agregar
          <IoIosAddCircleOutline className="font-bold" />
        </button>
      </div>
    </>
  );
}
