import { Button } from 'antd';

const ButtonForm = ({ onClick, type = 'button', children}) => (
    <Button type={type} onClick={onClick}>
        {children}
    </Button>
)

export default ButtonForm