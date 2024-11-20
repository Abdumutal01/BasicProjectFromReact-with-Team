import React from "react";

import { Link } from 'react-router-dom'
import './HeaderNav.css'

export default function HeaderNav() {
  return (
    <div className="header__navBox">
      <nav className="header__nav nav">
        <ul className="nav__list">

          <li className="nav__items">
            <Link
              to='/shopping'
              className='nav__links'
            >
              Dexqon bozor
            </Link>
          </li>
          <li className="nav__items">
            <Link
              to='/home'
              className='nav__links'
            >
              AGENTLIK HAQIDA
            </Link>
          </li>
          <li className="nav__items">
            <Link
              to='/page'
              className='nav__links'
            >
              YANGILIKLAR
            </Link>
          </li>
          <li className="nav__items">
            <Link
              to='/page'
              className='nav__links'
            >
              BOG’LANISH
            </Link>
          </li>
          <li className="nav__items">
            <Link
              to='/page5'
              className='nav__links'
            >
              QULAYLIKLAR
            </Link>
          </li>
          <li className="nav__items">
            <Link
              to='/page2'
              className='nav__links'
            >
              O’SIMLIKLAR HAQIDA
            </Link>
          </li>

        </ul>

        <div className="nav__userDiv">
          <div className="nav__balBox">
            <i class="fa-solid fa-bell"></i>
            <span
              className="nav__balNum"
            >
              1
            </span>
          </div>
          <Link to='/page3' className="nav__userBox">
            <h3 className="nav__userName">
              Behruzbek
            </h3>
            <img
              className="nav__userImg"
              src="https://s3-alpha-sig.figma.com/img/201b/db17/6947c86b213888344f79a07728502916?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N~Ef02WaWEAcGRTnnJ8-fxDI3J1cHOYPIGn3dy~rESBZRcXHJQJJcw6-4w7vGM3w4yHFkdZEifi0GeO~FjbqsJOwmsE44on9~qQh0tDQLO50kIQIFYX0CYpun4YH9k-4QqNRTae9~bP1ZK6qU7MJBcawiydS0vd-n2W6pT1IG5JZI8G3FxwTkLmZE7MdF~EANKFc-Fdgm0qrGH5Xqvd2AcbXDWaAfII87BKmAC8cOHY5obVI2XC98jEXDO7VnuwwZQ-bCOuTKrRgUQ1UzUOwHhwhrmrAGoV3CwBW27foH--b7KAe9B~D1zifPlcp6OvUnQhGJIgxACqXk20gMWUUjQ__"
              alt=""
            />
          </Link>
        </div>
      </nav>
    </div >
  )
}
