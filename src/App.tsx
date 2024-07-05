import { BsRocket } from "react-icons/bs";
import CreateTask from "./Components/CreateTask";
import ListTask from "./Components/ListTask";
import Options from "./Components/Options";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#0E0E0E] overflow-auto ">
        <header className="flex items-center justify-center h-40 gap-2 md:h-52">
          <BsRocket className="w-8 h-8 text-[#4BAEE7]" />
          <h2 className="text-4xl font-bold text-white tex-center">
            <span className="text-[#4BAEE7]">To</span>
            <span className="text-[#5F61C6]">do</span>
          </h2>
        </header>

        <main className="min-h-[80vh] md:min-h-[70vh] mx-auto bg-[#1A1A1A] max-w-[1200px] rounded-md shadow-md ">
          {/*Conted data to create task */}

          <div>
            <CreateTask />
          </div>

          <div>
            <Options />
          </div>
          {/*Conted data to task */}
          <div className="grid gap-2 mt-12 min-h-32 md:min-h-32">
            <ListTask />
            <ListTask />
            <ListTask />
            <ListTask />
            <ListTask />
            </div>
        </main>
      </div>
    </>
  );
}

export default App;
