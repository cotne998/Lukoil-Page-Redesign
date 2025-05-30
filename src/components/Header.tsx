import { useState, useRef, useEffect } from "react";
import Hamburger from "/assets/icon-hamburger.svg";
import Logo from "/assets/image-logo.png";

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState<"slide-in" | "slide-out">(
    "slide-in"
  );
  const menuRef = useRef<HTMLDivElement>(null);

  const Navigation: string[] = [
    "ბარათები",
    "სადგურები",
    "სიახლეები",
    "ვაკანსიები",
    "მენეჯმენტი",
    "ჩვენ შესახებ",
    "კონტაქტი",
    "შესვლა",
    "რეგისტრაცია",
  ];

  const DesktopNavigation: string[] = [
    "ბარათები",
    "სადგურები",
    "კომპანია",
    "სიახლეები",
    "კაბინეტი",
  ];

  const openMenu = () => {
    setDisplayMenu(true);
    setMenuAnimation("slide-in");
  };

  const closeMenu = () => {
    setMenuAnimation("slide-out");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }
    if (displayMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayMenu]);

  const handleAnimationEnd = () => {
    if (menuAnimation === "slide-out") {
      setDisplayMenu(false);
    }
  };

  return (
    <>
      <header className="flex justify-between items-center bg-[#efefef] drop-shadow-xl z-20 border-b-[0.5px] border-b-[#0303031d] fixed w-full">
        <img
          style={{ padding: "5px" }}
          className="w-[40px] cursor-pointer md:w-[60px]"
          src={Logo}
          alt="logo"
        />
        <img
          className="filter brightness-0 cursor-pointer md:hidden"
          src={Hamburger}
          alt="menu icon"
          onClick={openMenu}
        />
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            {DesktopNavigation.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-[13px] xl:text-[15px] cursor-pointer hover:text-[#DC3F37] transition-[0.2s]">
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {displayMenu && (
        <section
          ref={menuRef}
          style={{ padding: "40px 20px" }}
          className={`menu h-[100vh] bg-[#e8e8e8] w-[50%] fixed right-0 top-0 z-100 shadow-2xl overflow-y-auto ${menuAnimation}`}
          onAnimationEnd={handleAnimationEnd}>
          <nav>
            <ul className="flex flex-col gap-4">
              {Navigation.map((item) => (
                <li
                  key={item}
                  className="text-black text-[13px] cursor-pointer hover:text-[#DC3F37] transition-[0.2s]">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}
    </>
  );
}
