import { useState } from "react"
import { RiFilePaper2Line } from "react-icons/ri"
import { HiOutlineMail } from "react-icons/hi"
import { BiKey } from "react-icons/bi"
import { BsEye, BsEyeSlash } from "react-icons/bs"

import './Form.css'

function Form({ wideFieldSize, mediumFieldSize }) {
    const [hidePassword, setHidePassword] = useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true)

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword)
    }

    const toggleConfirmPasswordVisibility = () => {
        setHideConfirmPassword(!hideConfirmPassword)
    }

    const submitForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
            <form className="form" id="form">
                <div className="mb-3">
                    <label for="nameInput" className="form-label">Nome *</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Seu nome" />
                    <RiFilePaper2Line />
                </div>
                <div className="mb-3">
                    <label for="lastNameInput" className="form-label">Sobrenome *</label>
                    <input type="text" className="form-control" id="lastNameInput" placeholder="Seu sobrenome" />
                    <RiFilePaper2Line />
                </div>
                <div className={`mb-3 ${wideFieldSize}`}>
                    <label for="emailInput" className="form-label">Email *</label>
                    <input type="text" className="form-control" id="emailInput" placeholder="Seu email" />
                    <HiOutlineMail />
                </div>
                <div className={`mb-3 ${mediumFieldSize}`}>
                    <label for="passwordInput" className="form-label">Senha *</label>
                    <input type={hidePassword ? "password" : "text"} className="form-control" id="passwordInput" placeholder="Sua senha" />
                    <BiKey />
                    {hidePassword ? (
                        <BsEyeSlash className="passwordIcon" onClick={togglePasswordVisibility} />
                    ) : (
                        <BsEye className="passwordIcon" onClick={togglePasswordVisibility} />
                    )}
                </div>
                <div className={`mb-3 ${mediumFieldSize}`}>
                    <label for="passwordConfirmInput" className="form-label">Repetir Senha</label>
                    <input type={hideConfirmPassword ? "password" : "text"} className="form-control" id="passwordConfirmInput" placeholder="Repita a senha" />
                    <BiKey />
                    {hideConfirmPassword ? (
                        <BsEyeSlash className="passwordIcon" onClick={toggleConfirmPasswordVisibility} />
                    ) : (
                        <BsEye className="passwordIcon" onClick={toggleConfirmPasswordVisibility} />
                    )}
                </div>
                <div className="choose-class">
                    <p className="selected-class">Assassino</p>
                </div>
            </form>
            <button type="submit" form="form" className="btn-submit" onClick={submitForm}>Criar</button>
        </div>
    )
}


export default Form