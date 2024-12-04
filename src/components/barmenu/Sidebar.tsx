import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Image } from "@nextui-org/react";
import { Menu } from "antd";
import { useTheme } from "next-themes";
import { LuTicket } from "react-icons/lu";
import { TbReport, TbLayoutDashboard } from "react-icons/tb";

import type { MenuProps } from "antd";

interface SidebarProps {
  isOpen: boolean;
}
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "grp",
    label: "Menu",
    type: "group",
    children: [
      { key: "/", label: "Dashboard", icon: <TbLayoutDashboard /> },
      { key: "/ticket", label: "Ticket", icon: <LuTicket /> },
      { key: "/report", label: "Report", icon: <TbReport /> },
    ],
  },
];

function Sidebar({ isOpen }: SidebarProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuTheme: "light" | "dark" = theme === "dark" ? "dark" : "light";

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <main
      className={`border flex flex-col duration-100 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div id="logo" className="h-16 flex justify-center items-center">
        <Image src="./favicon.png" alt="LoGo" className="size-12" />
        <h2
          className={`text-nowrap text-2xl font-bold duration-100 ease-in-out animate-fade-in ${
            isOpen ? "w-20 ml-2" : "w-0 opacity-0 overflow-hidden"
          }`}
        >
          APL PS
        </h2>
      </div>
      <br />
      <Menu
        theme={menuTheme}
        onClick={onClick}
        style={{ background: "transparent" }}
        defaultSelectedKeys={[pathname]}
        inlineCollapsed={!isOpen}
        mode="inline"
        items={items}
      />
    </main>
  );
}

export default Sidebar;
