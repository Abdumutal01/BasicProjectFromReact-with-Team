import React from "react";
import { useTranslation } from "react-i18next";
import Section2__img1 from './Page1Main__section2Imgs/Section2__img1.png'
import Section2__img2 from './Page1Main__section2Imgs/Section2__img2.png'
import Section2__img3 from './Page1Main__section2Imgs/Section2__img3.png'
import './Page1Main__section2.css'

function Page1Main__section2() {
    const { t } = useTranslation();

    return (
        <section className="section2">
            <h1 className="section2__title1">{t("page2Section2__title1")}</h1>
            <p className="section2__title2">{t("page2Section2__title2")}</p>
            <br />
            <div className="section2__general">
                <div className="section2__box">
                    <img src={Section2__img1} alt="" />
                    <div className="section2__text__box">
                        <h2>{t("page2Section2Box1__title1")}</h2>
                        <div className="section2__div"></div>
                        <div className="section2__div"></div>
                        <div className="section2__div"></div>
                    </div>
                </div>
                <div className="section2__box">
                    <img src={Section2__img2} alt="" />
                    <div className="section2__text__box">
                        <h2>{t("page2Section2Box2__title1")}</h2>
                        <div className="section2__div"></div>
                        <div className="section2__div"></div>
                        <div className="section2__div"></div>
                    </div>
                </div>
                <div className="section2__box">
                    <img src={Section2__img3} alt="" />
                    <div className="section2__text__box">
                        <h2>{t("page2Section2Box3__title1")}</h2>
                        <div className="section2__div"></div>
                        <div className="section2__div"></div>
                        <div className="section2__div"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page1Main__section2;
