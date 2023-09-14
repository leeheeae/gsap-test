import { useState } from "react";
import "./App.css";

const TABS = ["default", "react", "vite"];

function App() {
  const [activeTab, setActiveTab] = useState("default");

  return (
    <>
      <div className="button-list">
        {TABS.map((tab) => (
          <button
            className={`${activeTab === tab ? "active" : null} custom-button`}
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
