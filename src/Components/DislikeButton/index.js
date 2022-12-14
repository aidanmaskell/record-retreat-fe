import './styles.scss'

const DislikeButton = ({ dislikeId }) => {

    const dislikeRecord = () => {
        fetch(`http://127.0.0.1:3000/collection/dislike/${dislikeId}`, {
            method: 'PUT'
        })
        .then(data => data.json())
        .then((response) => {
            if (response.success === true) {
                //confirm dislilke with a message popup
            }
        })
    }

    const handleClick = () => {
        dislikeRecord()
    }

    return (
        <>
            <button onClick={handleClick} className='m-1 dislike'>Dislike</button>
        </>
    )
}

export default DislikeButton