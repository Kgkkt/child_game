import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/game">Играй</Link>
          </li>
          <li>
            <Link to="/addElements">Добави елементи за играта</Link>
          </li>
          <li>
            <Link to="/login">Вход</Link>
          </li>
          <li>
            <Link to="/register">Нова регистрация</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;