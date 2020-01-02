
const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src="../static/starwars.jpg" width="150" height="50"></img></a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        nav {
          position: fixed;
          width: 100%;
          z-index: 9999;
          font-family: "Neucha", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}
    </style>
  </nav>
);

export default Navbar;