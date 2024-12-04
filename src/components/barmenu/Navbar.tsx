import { ThemeSwitcher } from "../ThemeSwitcher";
import { Button, User } from "@nextui-org/react";
import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";
// import { FaSearch } from "react-icons/fa";

interface SidebarProps {
  setIsopen: (isOpen: boolean) => void;
  isOpen: boolean;
}

function Navbar({ isOpen, setIsopen }: SidebarProps) {
  return (
    <header className="border-b h-[64px] flex justify-between items-center px-2">
      <Button
        isIconOnly
        onPress={() => setIsopen(!isOpen)}
        radius="sm"
        variant="light"
      >
        {isOpen ? (
          <RiMenuUnfold2Line size={24} />
        ) : (
          <RiMenuFold2Line size={24} />
        )}
      </Button>
      <div className="flex gap-1 pr-4">
        {/* <Input
          className="max-w-xs"
          radius="sm"
          placeholder="Search ..."
          startContent={<FaSearch size={20} className="text-default-500" />}
        /> */}
        <ThemeSwitcher />
        <User
          name="Jane Doe"
          description="@Admin"
          className="border-l-2 rounded-none pl-2"
          avatarProps={{
            src: "",
            isBordered: true,
          }}
        />
      </div>
    </header>
  );
}

export default Navbar;
