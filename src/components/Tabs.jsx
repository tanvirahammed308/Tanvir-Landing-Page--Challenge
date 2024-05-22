import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <div className="mb-4 ">
        <div className="">

        <ul
          className=" flex  text-sm font-medium "
          id="default-styled-tab"
          role="tablist"
        >
          
          
          
          <li role="presentation">
            <button
              className={`inline-block p-2  ${activeTab === "latest" ? "border-[#383838] text-[#383838] outline outline-2 outline-[#383838]" : "border-transparent text-[#383838]hover:text-[#383838] hover:border-[#383838] dark:text-[#383838]dark:border-[#383838] "}`}
              id="latest-styled-tab"
              onClick={() => handleTabClick("latest")}
              type="button"
              role="tab"
              aria-controls="latest"
              aria-selected={activeTab === "latest"}
            >
              Latest 
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-2  ${activeTab === "special" ? "border-[#383838] text-[#383838] outline outline-2 outline-[#383838]" : "border-transparent text-[#383838]hover:text-[#383838] hover:border-[#383838] dark:text-[#383838]dark:border-[#383838] dark:hover:text-[#383838]"}`}
              id="special-styled-tab"
              onClick={() => handleTabClick("special")}
              type="button"
              role="tab"
              aria-controls="special"
              aria-selected={activeTab === "special"}
            >
            Special 
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-2  ${activeTab === "bestsell" ? "border-[#383838] text-[#383838] outline outline-2 outline-[#383838]" : "border-transparent text-[#383838]hover:text-[#383838] hover:border-[#383838] dark:text-[#383838]dark:border-[#383838] dark:hover:text-[#383838]"}`}
              id="bestsell-styled-tab"
              onClick={() => handleTabClick("bestsell")}
              type="button"
              role="tab"
              aria-controls="bestsell"
              aria-selected={activeTab === "bestsell"}
            >
              Best sell
            </button>
          </li>
        </ul>
        </div>
      </div>
      <div id=" mt-5">
        <div
          className={`p-4 rounded-lg bg-gray-50  ${activeTab === "latest" ? "" : "hidden"}`}
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 ">
            this side will coming soon
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50  ${activeTab === "special" ? "" : "hidden"}`}
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 ">
            this side will coming soon...
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50  ${activeTab === "bestsell" ? "" : "hidden"}`}
          id="styled-settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 ">
           this side will coming soon........
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Tabs;
