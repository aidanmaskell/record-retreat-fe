import { Outlet, Link} from 'react-router-dom'
import './styles.scss'

const Nav = () => {
  return (
    <div className='m-0'>
      <div className='nav row d-flex justify-content-center'>
          <button className='col-4 col-md-2'><Link className='navLinks'to="/">HOME</Link></button>
          <button className='col-4 col-md-2'><Link className='navLinks'to="/collection">COLLECTION</Link></button>
          <button className='col-4 col-md-2'><Link className='navLinks'to="/shuffle">SHUFFLE</Link></button>
      </div>
      <Outlet />
    </div>
  )
}

export default Nav