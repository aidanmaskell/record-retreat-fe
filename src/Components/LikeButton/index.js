import './styles.scss'

const LikeButton = ({ likeId }) => {

    const likeRecord = () => {
        fetch(`http://127.0.0.1:3000/collection/like/${likeId}`, {
            method: 'PUT'
        })
        .then(data => data.json())
        .then((response) => {
            if (response.success === true) {
                //confirm like with message pop up
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