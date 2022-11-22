import NoRecords from "../NoRecords"
import RecordPreview from "../RecordPreview"

const Collection = ({ records }) => {

    const displayRecordPreviews = (records) => {
        if(records && records.length > 0) {
            return (<>{records.map((record) => (
                        <RecordPreview 
                            record={record}
                            key={record._id} />
                    ))}
                </>
            )
        } else {
            return <NoRecords />
        }
    }

    return (
        <div className="row d-flex justify-content-center">
            {displayRecordPreviews(records)}
        </div>
    )
}

export default Collection