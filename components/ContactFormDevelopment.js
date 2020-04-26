import React, {useState} from "react";
import Form from "./Form";
import InputField from "./InputField";
import {Button, } from "antd";
import { Input } from 'antd';

const { TextArea } = Input;

const ContactFormDevelopment = ({onSubmit}) => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')

    return (
        <div>
            <Form
                onSubmit={event => {
                    onSubmit(company, email, text);
                    event.preventDefault();
                }}
            >
                <InputField value={company} onChange={setCompany}>
                    Company
                </InputField>

                <InputField value={email} onChange={setEmail}>
                    Email:
                </InputField>

                <InputField value={phone} onChange={setPhone}>
                   Phone:
                </InputField>


                Kurzbeschreibung Anfrage:
                <TextArea rows={4}/>

                <Button type="primary" htmlType="submit">
                    Jetzt kontaktieren
                </Button>

            </Form>
        </div>

    )
}


export default ContactFormDevelopment

