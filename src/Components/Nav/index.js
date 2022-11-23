import { Outlet, Link} from 'react-router-dom'
import './styles.scss'

const Nav = () => {
  return (
    <div className='m-0'>
      <div className='nav row d-flex justify-content-center col col-md-6 offset-md-3'>
          <button className='col-4 py-2'><Link className='navLinks'to="/">COLLECTION</Link></button>
          <button className='col-4 py-2'><Link className='navLinks'to="/shuffle">SHUFFLE</Link></button>
          <button className='col-4 py-2'><Link className='navLinks'to="/addrecord">ADD RECORD</Link></button>
      </div>
      <Outlet />
    </div>
  )
}

export default Nav