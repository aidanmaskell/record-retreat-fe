import './styles.scss'
import RecordPlayer from "../RecordPlayer"

const RecordPreview = ({ record }) => {

    const displayRecord = (record) => {
        return (<div className="col-10 col-md-3 recordPreview m-2 p-2 d-flex flex-column align-items-center">
            <h3 className='text-center'>{record.artist}</h3>
            <h4 className='text-center'>{record.title}</h4>
            <RecordPlayer songLink={record.songLink}/>
        </div>)
    }

    return (
        <>
            {displayRecord(record)}
        </>
    )
}

export default RecordPreview