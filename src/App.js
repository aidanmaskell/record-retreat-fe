import { BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'
import './App.scss';
import Collection from './Components/Collection';
import Homepage from './Components/Homepage';
import Layout from './Components/Layout';
import Shuffle from './Components/Shuffle';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage />} />
            <Route path='collection' element={<Collection />} />
            <Route path='shuffle' element={<Shuffle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
