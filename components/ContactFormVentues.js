import React, {useState} from 'react'

//antd
import {Input} from 'antd';
import {Upload, message, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

//components
import Form from "./Form";
import InputField from "./InputField";
import ButtonForm from "./ButtonForm";

//for upload button
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


const ContactFormVentures = ({onSubmit}) => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('')

    return (
        <div className="contact-form-ventures">
            <Form
                onSubmit={event => {
                    onSubmit(company, email, text);
                    event.preventDefault();
                }}
            >
                    <InputField value={company} onChange={setCompany}>
                        Venture/Startup:
                    </InputField>

                    <InputField value={text} onChange={setText}>
                        Idee in einem Satz:
                    </InputField>
                 <InputField value={email} onChange={setEmail}>
                        Email:
                    </InputField>

                <div className="button-contact-form-ventures">
                    <Upload {...props}>

                        <Button>
                            <UploadOutlined/> Click to Upload
                        </Button>
                    </Upload>
                </div>

                <div className="button-contact-form-ventures">
                    <ButtonForm type="primary" htmlType="submit">
                        Jetzt kontaktieren
                    </ButtonForm>
                </div>

            </Form>
            <style jsx>{`
            .contact-form-ventures {
             margin: 24px auto;
            }
              
            .button-contact-form-ventures{
            padding-top: 24px;
            }
          
              
            `}</style>

        </div>

    )
}


export default ContactFormVentures



