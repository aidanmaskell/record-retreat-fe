import './styles.scss'
import ReactPlayer from "react-player"
import Draggable from 'react-draggable'
import { useState } from 'react'

const RecordPlayer = ({ songLink, showSong }) => {

    const [recordPlaying, setRecordPlaying] = useState(null)

    const getRecordById = (songId) => {
        fetch(`http://127.0.0.1:3000/collection/${songId}`)
        .then(data => data.json())
        .then((response) => {
            console.log(response.data)
    })
  }

    return (
        <Draggable 
            handle=".handle">
            <div className='player window'>
                <div className='titlebar handle'>
                    
                </div>
                <ReactPlayer 
                    url={songLink}
                    volume={1}
                    width='90%'
                    />
            </div>
        </Draggable>
    )
}

export default RecordPlayer