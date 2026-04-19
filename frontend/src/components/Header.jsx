import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">BDE</span>
          <span className="logo-bracket">]</span>
        </div>
        <div className="header-title">
          <h1>Bizarre Dataset Explorer</h1>
          <span className="header-sub">// spin. explore. build.</span>
        </div>
        <div className="header-status">
          <span className="status-dot"></span>
          <span className="status-text">SYSTEM ONLINE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;