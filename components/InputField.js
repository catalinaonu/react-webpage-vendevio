import React from "react";

//antd
import { Input, Form } from 'antd';


const InputField = ({value, onChange, children}) => (
    <label>
        {children}
        <Input
            type="text"
            value={value}
            onChange={event => onChange(event.target.value)}
        />
    </label>
)

export default InputField