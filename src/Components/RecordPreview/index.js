import './styles.scss'
import RecordPlayer from "../RecordPlayer"

const RecordPreview = ({ record }) => {

    const displayRecord = (record) => {
        return (<div className="col-10 col-md-4 recordPreview m-2">
            <h3>{record.artist}</h3>
            <h4>{record.title}</h4>
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