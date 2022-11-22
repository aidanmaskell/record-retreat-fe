import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss';
import AddRecord from './Components/AddRecord';
import Collection from './Components/Collection';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Shuffle from './Components/Shuffle';


const App = () => {

  const [records, setRecords] = useState(null)
  const [showSong, setShowSong] = useState(false)
  
  const getRecords = () => {
    fetch('http://127.0.0.1:3000/collection')
    .then(data => data.json())
    .then((response) => {
        setRecords(response.data)
    })
  }

  useEffect(() => {
    getRecords()
  }, [])

  return (
    <>
    <div className='row m-0'>
      <Header />
    </div>
    <div className='row page m-0'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Collection records={records} showSong={showSong} setShowSong={setShowSong}/>} />
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
