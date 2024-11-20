import React from "react";

import './HeaderHero.css'
import headerLogoImg from '../../assets/img/headerLogoImg.png'
import { Link } from "react-router-dom";

import i18n from '../../i18n'

export default function HeaderHero() {

    const changeLng = (lng) => {
        return () => {
            i18n.changeLanguage(lng)
        }
    }

    return (
        <div className="headerHero hero">
            <div className="container hero__general">

                <div className="hero__logoBox">
                    <img
                        className='hero__logoImg'
                        src={headerLogoImg}
                        alt=""
                    />
                    <div className="hero__logoData">
                        <h1 className="hero__logoTitle">
                            Agri<span>Al</span>
                        </h1>
                        <p className="hero__logoText">
                            qishloq xo‘jaligida  su‘niy intellekt va <br /> data science texnologiyalari
                        </p>
                    </div>
                </div>

                <div className="hero__boxes">
                    <div className="hero__firseBoxes">
                        <div className="hero__btnBox">
                            <Link to='/'>
                                <button className="hero__liveBtn">
                                    Chiqish
                                </button>
                            </Link>
                            <div className="hero__btnBoxes">
                                <button
                                    onClick={changeLng("uz")}
                                    className="hero__lngBtn"
                                >
                                    Uz
                                </button>
                                <button
                                    onClick={changeLng("en")}
                                    className="hero__lngBtn"
                                >
                                    Eng
                                </button>
                            </div>
                        </div>
                        <li className="hero__sortItem">
                            <input
                                className='hero__sortItemInput'
                                type="search"
                                name=""
                                id=""
                            />
                            <img
                                className='hero__sortItemImg'
                                src="https://s3-alpha-sig.figma.com/img/db62/18d3/36d36d5a4deacc1cc0f29a3f457ad774?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ift~RIWmDkjaHNNIMhTmcjWuHdxphOT5ro7RP3YcEkamQ4j0rYQVlO5T75CVqZr~J39QAooT~q8h6rYtbmo1bBCQfFOdTGarUAxvVP6bfA-BqapogpAF2AYxhTEpBtVW6n3XfmPfIWzO2uIXHTjpyvFNO2ATguvxp6qX-mk~FErSsLLNXNd0jn4jprs8~MXNXMEg~ccRHoQAEKEcoBwYzG8fH1aJ8IBbKKtu5C7CLjZXmmSFQw7~68c0Qt1D3vVxf1Z3gJMT9jjcrvGLW3rJkLrHBOtfhpa7oA1Ga3UUjJy~eOG-ctiNSOaw-hHSmCA-1tFGLmfx9LJn4-08IUkZ4g__"
                                alt=""
                            />
                        </li>
                    </div>
                    <ul className="hero__listBox">
                        <li className="hero__listItem">
                            <img
                                className='hero__telImg'
                                src="https://s3-alpha-sig.figma.com/img/47b6/92e8/a22d806dca7b360621f81b40a8b92920?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7jNoLjRCiQFmQpbAv-9HL9nuqqLfNA6D8rKj062vI1N7RtT6GclmsHQdx9HBDqU3nORonzurQZn4ckEr~PNmRtmDxwNHaIhpK0LlIL9R7D0pKlxz1d8CF7Rn7i~4Uzak4cloCDJMetqXNIdA0PdXWcjf2ZhnHwGRbxON3WsC0mhD70zMtQYDcah~rIvrrFu7A6udIoOKbfcO-zAemTsEiiBU7-dDGy6QLECWEliCTiEvhhA5ESXWCvm1xHcKeNXjydnG8awYKICukV6uu7rmlNDBBqbXrxG-HXIXq3iCma35gYWW9wY2I91U72M9Ff96XYE4dXtp4-6p5kuyeP~fg__"
                                alt=""
                            />
                            <a
                                className='hero__telLinks'
                                href="tel:+998 90 123 45 67"
                            >
                                +998 90 123 45 67
                            </a>

                        </li>
                        <li className="hero__listItem">
                            <img
                                className='hero__telImg'
                                src="https://s3-alpha-sig.figma.com/img/ac40/ab25/d5f42157571d3f8df1dde527cf21fdc1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JBZyxx7F2LKXH68l8JDELH1INQsB1lrDI1Aa03CTNvHGzM9Wlo-fvgC6jkzsB9IYsLy5CmBc1cKCtKdw5brkO9nRZiOMI6qnjL2R5Vtz--8pVkrgn33BKC4928eBiJMF-aC4~xr6DmwIcFcPUD01AlVjEuhym-g-Xsd3mxdcPdzUo6HZba0vs2K1PBCbEJamQWgvMKgYSBPQi3OIkHaQXF9My5VjdFb8-gxZVOdIzb5C2asPJvdODuv5tAPuUCw~1Co6-kBZiEhoanvM0WdkksR6Cbe6UyXdAh5vK3KBHTSf0NrK~qq3~8rb8L6aHyFv5W3Sw~A8shgvTWPhN-n-JQ__"
                                alt=""
                            />
                            <a
                                className='hero__telLinks'
                                href="tel:+998 90 123 45 67"
                            >
                                +998 90 123 45 67
                            </a>

                        </li>
                        <li className="hero__listItem">
                            <img
                                className='hero__telImg'
                                src="https://s3-alpha-sig.figma.com/img/49e2/e982/7393b59d05afa27f22ff9efa4c46235a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=je9VQtGM5pVFhU5nn78tpRJrahMPQGukstISTrIZEdDf5nmMkTl6RyL2i-Bwg5CINHNMjDruf2gt4LjokkVMJxs15JO9ZqYfzUJHnEUXYsxq4l25aZl9Xss~uLebopsbOxuluH~usBZOgbnT8olsnQ4fhcy0U3D12oLEEQ~oe5u3LUZAVsecNZSos0MNbwwoYeB04pifSJwSi3wR8JAvXHiAtYZhwAoVqY8oDp3LWWtU9FjMcRhkrv4EDYgGQeqfFpMzopZE5AgyltcDWQTFvdjEJEk-Sz7BHsM~ARc14316ghikDnE~Q0k9kXhKoIeMb5zbaBSECSzAxd4w1JNuOA__"
                                alt=""
                            />
                            <a
                                href="mailto:AgriAl@gmail.com"
                                className='hero__telLinks'
                            >
                                agrial@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
