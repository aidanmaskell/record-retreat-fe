import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss';
import AddRecord from './Components/AddRecord';
import Collection from './Components/Collection';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Shuffle from './Components/Shuffle';

const App = () => {
  return (
    <>
    <div className='row m-0'>
      <Header />
    </div>
    <div className='row page m-0'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Collection />} />
            <Route path='shuffle' element={<Shuffle />} />
            <Route path='addrecord' element={<AddRecord />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
