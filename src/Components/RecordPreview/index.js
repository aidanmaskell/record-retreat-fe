import DislikeButton from '../DislikeButton'
import LikeButton from '../LikeButton'
import './styles.scss'

const RecordPreview = ({ 
    record, recordId, setRecordId, setRecordPlaying, setSuccessMsgdisplayed 
}) => {

    const getRecordById = (recordId) => {
        if(recordId) {
            fetch(`http://127.0.0.1:3000/collection/${recordId}`)
            .then(data => data.json())
            .then((response) => {
                setRecordPlaying(response.data[0].songLink)
            })
        }
    }

    const handleClick = (e) => {
        setRecordId(e.target.id)
        getRecordById(recordId)
    }

    const displayRecord = (record) => {
        return (<div className="col-10 col-md-3 recordPreview m-2 p-2 d-flex flex-column align-items-center">
            <h3 className='text-center'>{record.artist}</h3>
            <h4 className='text-center'>{record.title} - {record.year}</h4>
            <button onClick={handleClick} id={record._id} className='m-1 play'>PLAY</button>
            <div className='likeDislike'>
                <LikeButton 
                    likeId={record._id}
                    setSuccessMsgdisplayed={setSuccessMsgdisplayed} />
                <DislikeButton 
                    dislikeId={record._id}
                    setSuccessMsgdisplayed={setSuccessMsgdisplayed} />
            </div>
        </div>)
    }

    return (
        <>
            {displayRecord(record)}
        </>
    )
}

export default RecordPreview