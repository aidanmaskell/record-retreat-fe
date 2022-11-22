import ReactPlayer from "react-player"

const RecordPlayer = ({ songLink }) => {
    return (
        <>
            <ReactPlayer 
                url={songLink}
                volume={0.2}
                width='90%'
                />
        </>
    )
}

export default RecordPlayer