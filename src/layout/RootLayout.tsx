import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/barmenu/Navbar";
import Sidebar from "../components/barmenu/Sidebar";


function RootLayout() {
  const [isOpen, setIsopen] = useState<boolean>(true);

  return (
    <>
      <main className="flex relative">
        <Sidebar isOpen={isOpen}/>
        <div className="w-full">
          <Navbar isOpen={isOpen} setIsopen={setIsopen} />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default RootLayout;
