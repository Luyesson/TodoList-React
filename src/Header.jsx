import HeaderIcon from './HeaderIcon.jsx';
function Header({children}) {
    return (
        <header className="header">
            <HeaderIcon />
            {children}
        </header>
  );
}

export default Header;