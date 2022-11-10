import { BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'
import './App.scss';
import Collection from './Components/Collection';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Nav from './Components/Nav';
import Shuffle from './Components/Shuffle';

const App = () => {
  return (
    <>
    <Header />
    <div className='row page'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Homepage />} />
            <Route path='collection' element={<Collection />} />
            <Route path='shuffle' element={<Shuffle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
