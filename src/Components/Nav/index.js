import { Outlet, Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='nav col-12 d-flex justify-content-center'>
          <Link to="/"><button>Home</button></Link>
          <Link to="/collection"><button>Collection</button></Link>
          <Link to="/shuffle"><button>Shuffle</button></Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Nav