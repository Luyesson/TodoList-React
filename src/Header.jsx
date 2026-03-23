import HeaderIcon from "@/HeaderIcon.jsx";
function Header() {
  return (
    <header className="header">
      <HeaderIcon />
      <h1
        style={{ display: "inline-block" }}
        className="text-2xl font-bold text-green-600"
      >
        Todo List
      </h1>
    </header>
  );
}

export default Header;
