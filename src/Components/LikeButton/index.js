import './styles.scss'

const LikeButton = ({ likeId }) => {

    const likeRecord = (likeId) => {
        fetch(`http://127.0.0.1:3000/collection/like/${likeId}`, {
            method: 'PUT'
        })
        .then(data => data.json())
        .then((response) => {
            console.log(response)
            if (response.success === true) {
                console.log('hello')
            }
        })
    }

    const handleClick = () => {
        likeRecord(likeId)
    }

    return (
        <>
            <button 
                onClick={handleClick} 
                id={likeId} className='m-1 like'>Like</button>
        </>
    )
}

export default LikeButton