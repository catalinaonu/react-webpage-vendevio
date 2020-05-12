import React, {useState} from "react";
import {Form, Input, Button} from "antd";

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

const ContactFormDevelopment = ({onSubmit}) => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
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
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone!',
                        },
                    ]}
                >
                    <Input value={phone} onChange={setPhone}/>
                </Form.Item>
                <Form.Item
                    label="Kurzbeschreibung Anfrage"
                    name="kurzbeschreibung anfrage"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Kurzbeschreibung Anfrage !',
                        },
                    ]}
                >
                    <TextArea rows={4} value={text} onChange={setText}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default ContactFormDevelopment

