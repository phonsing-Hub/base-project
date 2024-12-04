import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Button isIconOnly onPress={()=>setTheme(theme === "light" ? "dark" : "light")} radius="sm" variant="light">
        {
          theme === "light" ? <FaCloudMoon size={24} color="#7828C8"/> : <FaCloudSun size={24} color="#F5A524"/>
        }
      </Button>
    </>
  );
}
