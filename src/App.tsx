import { FaTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";

import FilterTask from "./Components/FilterTask";

function App() {
  return (
    <>
      <div className=" bg-[#F8F7FD] h-screen flex ">
        <div className=" max-w-80 md:max-w-[40rem] mx-auto items-center justify-center flex w-full flex-col">
          <div className=" flex md:flex-row items-center w-full justify-between mb-3">
            <button
              type="button"
              className="bg-[#646FEF] text-white py-2 px-3 rounded-lg hover:bg-[#5966f7]"
            >
              Agregar Tarea
            </button>
            <FilterTask />
          </div>
          <div className="w-full p-6 bg-slate-200 rounded-xl flex flex-col gap-3">

          <div className="shadow-md flex-1 rounded-lg bg-white p-3 border border-slate-200">
              <div className="flex justify-between items-center ">
                <div>
                  <p className="font-bold text-sm text-gray-500">
                    Limpiar Cuarto
                  </p>
                  <p className="font-semibold text-sm text-gray-600">
                    3:09 Am, 1/06/16/2024
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-slate-300 p-2 rounded-md cursor-pointer">
                    <FaTrashCan className="" />
                  </span>
                  <span className="bg-slate-300 p-2 rounded-md cursor-pointer">
                    <FaPencilAlt />
                  </span>
                </div>
              </div>
            </div>

            <div className="shadow-md flex-1 rounded-lg bg-white p-3 border border-slate-200">
              <div className="flex justify-between items-center ">
                <div>
                  <p className="font-bold text-sm text-gray-500 line-through">
                    Limpiar Cuarto
                  </p>
                  <p className="font-semibold text-sm text-gray-600">
                    3:09 Am, 1/06/16/2024
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-slate-300 p-2 rounded-md cursor-pointer">
                    <FaTrashCan className="" />
                  </span>
                  <span className="bg-slate-300 p-2 rounded-md cursor-pointer">
                    <FaPencilAlt />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
