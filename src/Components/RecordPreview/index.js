import './styles.scss'
import RecordPlayer from "../RecordPlayer"

const RecordPreview = ({ record, showSong, setShowSong }) => {

    const handleClick = (e) => {
        setShowSong(e.target.id)
        console.log(showSong)
    }

    const displayRecord = (record) => {
        return (<div className="col-10 col-md-3 recordPreview m-2 p-2 d-flex flex-column align-items-center">
            <h3 className='text-center'>{record.artist}</h3>
            <h4 className='text-center'>{record.title}</h4>
            <button onClick={handleClick} id={record._id} className='m-1'>PLAY</button>
        </div>)
    }

    return (
        <>
            {displayRecord(record)}
        </>
    )
}

export default RecordPreview