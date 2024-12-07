import { useLocation, useNavigate } from "react-router";
import { Badge, Image, Listbox, ListboxItem } from "@nextui-org/react";
import { LuTicket } from "react-icons/lu";
import { TbReport, TbLayoutDashboard } from "react-icons/tb";

interface SidebarProps {
  isOpen: boolean;
}

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] px-1 py-2">{children}</div>
);

function Sidebar({ isOpen }: SidebarProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
      <ListboxWrapper>
        <Listbox
          aria-label="Actions"
          color="default"
          variant="light"
          onAction={(key) => navigate(String(key))}
        >
          <ListboxItem
            key="/"
            className={pathname === "/" ? "bg-primary-100" : ""}
          >
            <div
              className={`flex items-center gap-2 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <TbLayoutDashboard size={24} />
              {isOpen && "Dashboard"}
            </div>
          </ListboxItem>
          <ListboxItem
            key="/ticket"
            className={pathname === "/ticket" ? "bg-primary-100" : ""}
          >
            <div
              className={`flex items-center gap-2 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <Badge
                color="danger"
                content={5}
                isInvisible={false}
                shape="circle"
              >
                <LuTicket size={24} />
              </Badge>
              {isOpen && "Ticket"}
            </div>
          </ListboxItem>
          <ListboxItem
            key="/report"
            className={pathname === "/report" ? "bg-primary-100" : ""}
          >
            <div
              className={`flex items-center gap-2 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <TbReport size={24} />
              {isOpen && "Report"}
            </div>
          </ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </main>
  );
}

export default Sidebar;
