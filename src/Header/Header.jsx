import React from "react";

import HeaderHero from "./HeaderHero/HeaderHero";
import HeaderNav from "./HeaderNav/HeaderNav";


export default function Header() {
    return (
        <header className="header">

            <HeaderHero />
            <HeaderNav />

        </header>
    )
}
