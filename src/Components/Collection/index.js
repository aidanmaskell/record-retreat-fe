import RecordPreview from "../RecordPreview"

const Collection = (records) => {

    const displayRecordPreviews = (records) => {
        if(records && records.length > 0) {
            return (
                <>
                    {records.map((record) => {
                        <RecordPreview record={record} />
                    })}
                </>
            )
        }
    }

    return (
        <>

        </>
    )
}

export default Collection