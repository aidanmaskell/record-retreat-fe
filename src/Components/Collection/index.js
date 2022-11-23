import { useState } from "react"
import NoRecords from "../NoRecords"
import RecordPlayer from "../RecordPlayer"
import RecordPreview from "../RecordPreview"

const Collection = ({ records }) => {

    const [recordId, setRecordId] = useState(false)
    const [recordPlaying, setRecordPlaying] = useState(null)

    const displayRecordPreviews = (records) => {
        if(records && records.length > 0) {
            return (<>{records.map((record) => (
                        <RecordPreview 
                            record={record}
                            key={record._id} 
                            recordId={recordId}
                            setRecordId={setRecordId}
                            setRecordPlaying={setRecordPlaying} />
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
            <RecordPlayer 
                recordId={recordId}
                recordPlaying={recordPlaying} />
        </>

    )
}

export default Collection