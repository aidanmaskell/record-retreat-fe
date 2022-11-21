import RecordPreview from "../RecordPreview"

const Collection = ({ records }) => {

    console.log(records)

    const displayRecordPreviews = (records) => {
        if(records && records.length > 0) {
            return (<>{records.map((record) => (
                        <RecordPreview record={record} />
                    ))}
                </>
            )
        } else {
            return <h2>hi</h2>
        }
    }

    return (
        <>
            {displayRecordPreviews(records)}
        </>
    )
}

export default Collection