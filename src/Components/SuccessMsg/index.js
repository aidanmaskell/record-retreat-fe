import './styles.scss'

const SuccessMsg = ({ successMsgContent, setSuccessMsgContent}) => {

    return ( 
        <div className="likedRecordMsg d-flex align-items-center justify-content-center flex-column">
            <button>X</button>
            <h2 className='text-center align-middle'>Record successfully liked!</h2>
        </div>
    )
}

export default SuccessMsg