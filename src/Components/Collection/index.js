import NoRecords from "../NoRecords"
import RecordPlayer from "../RecordPlayer"
import RecordPreview from "../RecordPreview"

const Collection = ({ records, showSong, setShowSong }) => {

    const displayRecordPreviews = (records) => {
        if(records && records.length > 0) {
            return (<>{records.map((record) => (
                        <RecordPreview 
                            record={record}
                            key={record._id} 
                            showSong={showSong}
                            setShowSong={setShowSong} />
                    ))}
                </>
            )
        } else {
            return <NoRecords />
        }
    }

    return (
        <>
        <div className="row d-flex justify-content-center">
            {displayRecordPreviews(records)}
        </div>
            <RecordPlayer showSong={showSong}/>
        </>

    )
}

export default Collection