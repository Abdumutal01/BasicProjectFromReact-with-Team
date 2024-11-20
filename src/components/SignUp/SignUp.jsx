import React, { useContext, useEffect, useRef, useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import ApContext from "../context/store";
import PassEyes from "../PassEyes/PassEyes";


export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "USERDATA":
      return {
        ...state,
        ...action.userInfo
      }
    default:
      return state
  }
}



export default function SignUp() {

  const [eyes, setEyes] = useState(false)

  let alertText = "To'liq to'ldirmadiz"

  const homePage = useNavigate()
  const [state, dispatch] = useContext(ApContext)
  // const [signUp, setSignUp] = useState(() => {
  //   try {
  //     const storedData = localStorage.getItem("users");
  //     return storedData ? JSON.parse(storedData) : [];
  //   } catch (error) {
  //     console.error("LocalStorage parsing error:", error);
  //     return [];
  //   }
  // });

  // const nameRef = useRef(null);
  // const surNameRef = useRef(null);
  // const emailRef = useRef(null);
  // const passRef = useRef(null);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const testInput = () => {
    if (
      !name.trim() == "" ||
      !lastName.trim() == "" ||
      !email.trim() == "" ||
      !password.trim() == ""
    ) {
      setTimeout(() => {
        homePage("/home")

      }, 2000)

    } else {
      toast(alertText)
    }
  }



  const formSumbit = (e) => {
    e.preventDefault();


    testInput()


    dispatch({
      type: "USERDATA", userInfo: {
        name: name,
        lastName: lastName,
        email: email,
        password: password
      }
    })

    // if (
    //   !nameRef.current.value.trim() ||
    //   !surNameRef.current.value.trim() ||
    //   !emailRef.current.value.trim() ||
    //   !passRef.current.value.trim()
    // ) {
    //   alert("Barcha maydonlarni to'ldiring!");
    //   return;
    // }

    // const userData = {
    //   name: nameRef.current.value,
    //   surName: surNameRef.current.value,
    //   email: emailRef.current.value,
    //   password: passRef.current.value,
    // };

    // setSignUp((prevSignUp) => [...prevSignUp, userData]);

    // nameRef.current.value = "";
    // surNameRef.current.value = "";
    // emailRef.current.value = "";
    // passRef.current.value = "";
  };

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(signUp));
  // }, [signUp]);

  return (
    <div className="signUp">
      <div className="container signUp__general ">
        <h2 className="singUp__title">Royxatdan o’tish</h2>
        <form className="signUp__form" onSubmit={formSumbit}>
          <div className="signUp__formInputs">
            <input
              // ref={nameRef}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="signUp__input"
              placeholder="Ism"
            />
            <input
              // ref={surNameRef}
              onChange={(e) => setLastName(e.target.value)}

              type="text"
              className="signUp__input"
              placeholder="Familiya"
            />
            <input
              // ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}

              type="email"
              className="signUp__input"
              placeholder="Email (majburiy)"
            />
            <li className='passBox'>
              <input
                // ref={passRef}
                onChange={(e) => setPassword(e.target.value)}

                type={eyes ? "text" : "password"}
                className="signUp__input passBoxInput"
                placeholder="Parol kiriting"
              />
              <PassEyes setEyes={setEyes} />

            </li>
          </div>
          <Dropdown />
          <p className="signUp__text">
            Agar siz ro'yxatdan o'tgan bo'lsangiz{" "}
            <Link to="/login" className="signUp__link">
              shu yerni bosing
            </Link>
          </p>
          <button type="submit" className="signUp__submit">
            Ro’yxatdan o’tish
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
