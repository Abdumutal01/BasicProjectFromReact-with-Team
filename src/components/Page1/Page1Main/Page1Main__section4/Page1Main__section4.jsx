import React from "react";
import { useTranslation } from "react-i18next"; 
import section4__img1 from './Page1Main__section4Imgs/section4__img1.png'
import section4__img2 from './Page1Main__section4Imgs/section4__img2.png'
import './Page1Main__section4.css'

function Page1Main__section4() {
    const { t } = useTranslation();

    return (
        <section>
            <div className="section4__general">
                <div className="section4__box1">
                    <span>
                        <h1>{t("page2Section4Box1__title1")}</h1>
                        <p>{t("page2Section4Box1__title2")}</p>
                    </span>
                    <img src={section4__img1} alt="" />
                </div>
                <div className="section4__box1">
                    <img src={section4__img2} alt="" />
                    <span>
                        <h1>{t("page2Section4Box1__title1")}</h1>
                        <p>{t("page2Section4Box1__title2")}</p>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Page1Main__section4;
