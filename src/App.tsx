import { useState } from "react";
import type { INavElement } from "./types";
import { DEFAULT_NAV_TABS } from "./constants/tabs";

function App() {
  const [tabs, setTabs] = useState<INavElement[]>(DEFAULT_NAV_TABS);

  return (
    <article className="bg-primary-100 h-screen p-20">
      <h1 className="text-2xl font-bold">Fillout</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Tabs</h2>
        </div>
      </div>
    </article>
  );
}

export default App;
