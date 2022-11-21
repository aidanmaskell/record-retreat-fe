import { Outlet, Link} from 'react-router-dom'
import './styles.scss'

const Nav = () => {
  return (
    <div className='m-0'>
      <div className='nav row d-flex justify-content-center'>
          <button className='col-4 col-md-2 py-2'><Link className='navLinks'to="/">COLLECTION</Link></button>
          <button className='col-4 col-md-2 py-2'><Link className='navLinks'to="/shuffle">SHUFFLE</Link></button>
          <button className='col-4 col-md-2 py-2'><Link className='navLinks'to="/addrecord">ADD RECORD</Link></button>
      </div>
      <Outlet />
    </div>
  )
}

export default Nav