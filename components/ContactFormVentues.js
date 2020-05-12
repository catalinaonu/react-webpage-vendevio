import React, {useState} from 'react'

import {Upload, message, Button, Form, Input} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const {TextArea} = Input;

//for upload button
const upload = {
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

const ContactFormVentures = () => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('')

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onChange = event => onChange(event.target.value)

    return (
        <>
            <Form
                {...layout}
                name="contact-form-ventures"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Company"
                    name="company"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input value={company} onChange={setCompany}/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input value={email} onChange={setEmail}/>
                </Form.Item>
                <Form.Item
                    label="Idee in einem Satz"
                    name="idee in einem Satz"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <TextArea row={4} value={text} onChange={setText}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Upload {...upload}>
                        <Button>
                            <UploadOutlined/> Click to Upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Jetzt kontaktieren
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default ContactFormVentures



