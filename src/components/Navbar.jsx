import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log("location");
  console.log(location);
  console.log(location.pathname);

  let pageLinks = [];
  let navbar = "";
  let buttons = "";

  if (location.pathname === "/") {
    pageLinks = [];
    /*pageLinks = [
      { name: "Main", url: "/" },
      { name: "W", url: "/w" },
    ];*/
    navbar = "text-center shadow-xl w-full fixed top-0 left-0 bg-dark z-10";
    buttons = "items-center justify-between py-4 px-10";
  } else if (location.pathname === "/w") {
    pageLinks = [
      { name: "THIS PAGEEE", url: "/w" },
      { name: "HOMEEE", url: "/" },
    ];
    navbar =
      "text-center w-full fixed top-0 left-0 bg-black border border-white";

    buttons = "items-center justify-between py-4 px-10 text-white";
  }

  return (
    <div className={navbar}>
      <div className={buttons}>
        <ul>
          {pageLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
