import React, {useState} from 'react'

//antd


// components
import Button from "./ButtonForm";
import Form from "./Form";
import InputField from "./InputField";


const JobApplyForm = ({onSubmit, job}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedInProfile, setLinkedInProfile] = useState('');

    return (
        <div>
            <Form onSubmit={event => {
                onSubmit(firstName, lastName, email, phone, linkedInProfile);
                event.preventDefault();
            }}
            >
                <InputField value={firstName} onChange={setFirstName}>
                    First Name:
                </InputField>

                <InputField value={lastName} onChange={setLastName}>
                    Last Name:
                </InputField>

                <InputField value={email} onChange={setEmail}>
                    Email:
                </InputField>

                <InputField value={phone} onChange={setPhone}>
                    Phone:
                </InputField>

                <InputField value={linkedInProfile} onChange={setLinkedInProfile}>
                    LinkedIn Profile:
                </InputField>

                {/*<Button type="submit">SUBMIT APPLICATION</Button>*/}

            </Form>
        </div>
    )
}

export default JobApplyForm