import React, {useState} from "react";
import Form from "./Form";
import InputField from "./InputField";
import {Button,} from "antd";


const ContactFormDevelopment = ({onSubmit}) => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')

    return (
        <div>
            <Form
                onSubmit={event => {
                    onSubmit(company, email, text, phone);
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

                <InputField value={text} onChange={setText}>
                    Kurzbeschreibung Anfrage:
                </InputField>
                <div className="button-contact-form-development">
                    <Button type="primary" htmlType="submit">
                        Jetzt kontaktieren
                    </Button>
                </div>

            </Form>
            <style jsx>{`
            .button-contact-form-development {
             padding-top: 24px;
            }
            `}</style>
        </div>

    )
}


export default ContactFormDevelopment

