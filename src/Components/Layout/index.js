import { BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/collection">Collection</Link>
        </li>
        <li>
          <Link to="/shuffle">Shuffle</Link>
        </li>
      </ul>

      <Outlet />
    </>
  )
}

export default Layout