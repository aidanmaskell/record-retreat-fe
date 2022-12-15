import { useState } from "react"
import NoRecords from "../NoRecords"
import RecordPlayer from "../RecordPlayer"
import RecordPreview from "../RecordPreview"
import SuccessMsg from '../SuccessMsg'

const Collection = ({ records }) => {

    const [recordId, setRecordId] = useState(false)
    const [recordPlaying, setRecordPlaying] = useState(null)
    const [successMsgDisplayed, setSuccessMsgdisplayed] = useState(false)
    const [successMsgContent, setSuccessMsgContent] = useState(null)
    

    const displayRecordPreviews = (records) => {
        if(records && records.length > 0) {
            return (<>{records.map((record) => (
                        <RecordPreview 
                            record={record}
                            key={record._id} 
                            recordId={recordId}
                            setRecordId={setRecordId}
                            setRecordPlaying={setRecordPlaying}
                            successMsgDisplayed={successMsgDisplayed}
                            setSuccessMsgdisplayed={setSuccessMsgdisplayed} />
                    ))}
                </>
            )
        } else {
            return <NoRecords />
        }
    }

    return (
        <>
            <SuccessMsg 
                successMsgContent={successMsgContent}
                setSuccessMsgContent={setSuccessMsgContent}  />
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