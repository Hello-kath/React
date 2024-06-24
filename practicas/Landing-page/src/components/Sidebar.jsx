import React, { useState } from "react";
import {
  RiMoneyDollarCircleLine,
  RiFacebookLine,
  RiInstagramLine,
  RiFilter3Line,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <section
        className={`w-[80%] md:w-[40%] fixed lg:static top-0 ${
          showSidebar ? "left-0" : "-left-full"
        } lg:w-80 h-full  text-gray-400 transition-all bg-[#181A20] p-4 lg:p-0 shadow-2xl lg:shadow-none z-50`}
      >
        {/* Search */}
        <div className="bg-[#362C29]/50 rounded-2xl p-4 mb-4">
          <h4 className="mb-4 text-white text-lg">Categorias</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="indy" className="accent-[#E58D27]" />
              <label htmlFor="indy">Indy</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Adventure"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Adventure">Adventure</label>
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Casual Game"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Casual Game">Casual Game</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Strategy"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Strategy">Strategy</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Simulator"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Simulator">Simulator</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Action Game"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Action Game">Action Game</label>
            </div>
          </div>
          <h4 className="my-4 text-white text-lg">Platforms</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="PC" />
              <label htmlFor="PC">PC</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Playstation 5"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Playstation 5">Playstation 5</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Playstation 4"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Playstation 4">Playstation 4</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Xbox Series"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Xbox Series">Xbox Series</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Nintendo Switch"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Nintendo Switch">Nintendo Switch</label>
            </div>
          </div>

          <form className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-4 mt-4">
              
            <button
              type="submit"
              className="bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200"
            >
              Apply Filter
            </button> 
              
            </div>
          
          </form>
        </div>
       
      </section>
      {/* Button mobile */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed bottom-4 right-4 bg-[#E58D27] p-4 rounded-full text-xl"
      >
        {showSidebar ? <RiCloseLine /> : <RiFilter3Line />}
      </button>
    </>
  );
};

export default Sidebar;
