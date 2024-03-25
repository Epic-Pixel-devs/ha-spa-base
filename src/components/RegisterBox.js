import { AiFillThunderbolt } from "react-icons/ai"
import Form from './Form'
import './RegisterBox.css'

function RegisterBox({ title }) {
    return (
        <div className="container">
            <div className="register-box">
                <p className="register-box-title">
                    <AiFillThunderbolt className="thunderSvg"/>
                    {title}
                    <AiFillThunderbolt className="thunderSvg" />
                </p>
                <Form wideFieldSize="wide" mediumFieldSize="medium" />
            </div>

        </div>
    )
}


export default RegisterBox