import JobApplyForm from "./JobApplyForm";
import React, {useState} from 'react'
import Button from "./Button";

const JobApplyModal = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    }
    const handleOk = e => {
        setVisible(false)
    }

    const handleCancel = e => {
        setVisible(false)
    }
    return (
        <div>
            <Button type="button" onClick={showModal}> Apply now </Button>
            <Modal
                visible={visible}
                handleOk={handleOk}
                handleCancel= {handleCancel}
            >
                <JobApplyForm/>
            </Modal>
        </div>
    )
}

export default JobApplyModal

const Modal = ({handleCancel, handleOk, visible, children, job}) => {
    return (
        <div>
            <p> Your Application </p>
            {children}
            <Button onClick={handleCancel}> Cancel </Button>
            <Button onClick={handleOk}> Submit the application </Button>
        </div>
    )
}


