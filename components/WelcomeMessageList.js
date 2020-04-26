//antd


import welcomeMessage from "./Data/welcome_info";

const keys = Object.keys(welcomeMessage)

const WelcomeMessagesList = () => (
    <div>
        {keys.map = (key => (
            <WelcomeMessage key={key} welcomeMessage={welcomeMessage[key]}/>
            ))}
    </div>
        )

export default WelcomeMessagesList