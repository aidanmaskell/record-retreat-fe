import NoRecords from "../NoRecords"
import RecordPreview from "../RecordPreview"

const Collection = ({ records }) => {

    const displayRecordPreviews = (records) => {
        if(records && records.length > 0) {
            return (<>{records.map((record) => (
                        <RecordPreview record={record} />
                    ))}
                </>
            )
        } else {
            return <NoRecords />
        }
    }

    return (
        <>
            {displayRecordPreviews(records)}
        </>
    )
}

export default Collection