import ReactPlayer from "react-player"

const RecordPlayer = ({ songLink, showSong }) => {
    return (
        <>
            <ReactPlayer 
                url={songLink}
                volume={1}
                width='90%'
                />
        </>
    )
}

export default RecordPlayer