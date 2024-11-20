import React, { useContext, useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../SignUp/SignUp.css'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import ApContext from '../context/store'
import PassEyes from '../PassEyes/PassEyes';


export default function SignIn() {

    const [eyes, setEyes] = useState(false)

    const [emailTest, setEmailTest] = useState("")
    const [passwordTest, setPasswordTest] = useState("")
    const [state, dispatch] = useContext(ApContext)

    const navigate = useNavigate()

    const signInHandler = (e) => {
        e.preventDefault()
        console.log(state);
        console.log(emailTest, passwordTest);

        if (
            emailTest === state.email &&
            passwordTest === state.password
        ) {
            setTimeout(() => {
                navigate("/home")

            }, 2000)
        } else {
            toast("Parol yoki Email da  hato bor")
        }


    }

    // const [oldUser] = useState(localStorage.getItem())

    // const emailTestRef = useRef(null)
    // const passwordTestRef = useRef(null)

    // const signInHandler = (e) => {
    //     e.preventDefault()
    //     if (
    //         !emailTestRef.current.value.trim() ||
    //         !passwordTestRef.current.value.trim()
    //     ) {
    //         alert("Barchasini to'ldiring!");
    //         return;
    //     }
    //     alert("true")
    //     const dataTest = {
    //         email: emailTestRef.current.value,
    //         password: passwordTestRef.current.value,
    //     }

    //     console.log(dataTest);

    // }

    return (
        <div className='signUp signIn'>
            <div className="container signIn__general">
                <h2 className='singUp__title'>
                    Kirish
                </h2>

                <form
                    onSubmit={signInHandler}
                    className='signIn__form'
                >
                    <input
                        type="email"
                        className="signUp__input"
                        placeholder="Email (majburiy)"
                        // ref={emailTestRef}
                        onChange={(e) => setEmailTest(e.target.value)}
                    />
                    <li className='passBox'>
                        <input
                            type={eyes ? "text" : "password"}
                            className="signUp__input passBoxInput"
                            placeholder="Parol kiriting"
                            // ref={passwordTestRef}

                            onChange={(e) => setPasswordTest(e.target.value)}
                        />
                        <PassEyes setEyes={setEyes} />
                    </li>

                    <p className="signIn__text">
                        Agar siz royhatdan o’tmagan bo’sansiz <Link to='/signUp'>Ro’yxatdan</Link>
                    </p>
                    <button
                        type="submit"
                        className='signUp__submit'
                    >
                        Kirish
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
