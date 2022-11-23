import './styles.scss'
import ReactPlayer from "react-player"
import Draggable from 'react-draggable'
import React, { useEffect, useState } from 'react'

const RecordPlayer = ({ recordId, recordPlaying }) => {

    const nodeRef = React.useRef(null)
    const [playerVisible, setPlayerVisible] = useState('player window')

    useEffect(() => {
        if (recordId) {
            setPlayerVisible('window')
        } else {
            setPlayerVisible('d-none')
        }
      }, [recordId])

    return (
        <Draggable 
            nodeRef={nodeRef}
            handle=".handle">
            <div className={playerVisible} ref={nodeRef}>
                <div className='titlebar handle d-flex justify-content-start'>
                    <button className=''>X</button>
                </div>
                <div className='player m-0 p-0'>
                    <ReactPlayer 
                        url={recordPlaying}
                        volume={1}
                        width='100%'
                        controls={true}
                        />
                </div>
            </div>
        </Draggable>
    )
}

export default RecordPlayer