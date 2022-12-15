import './styles.scss'

const LikeButton = ({ likeId, setSuccessMsgdisplayed }) => {

    const likeRecord = () => {
        fetch(`http://127.0.0.1:3000/collection/like/${likeId}`, {
            method: 'PUT'
        })
        .then(data => data.json())
        .then((response) => {
            if (response.success === true) {
                setSuccessMsgdisplayed(true)
                setTimeout(() => {
                    setSuccessMsgdisplayed(false)
                },[3])
            }
        })
    }

    const handleClick = () => {
        likeRecord()
    }

    return (
        <>
            <button onClick={handleClick} id={likeId} className='m-1 like'>Like</button>
        </>
    )
}

export default LikeButton