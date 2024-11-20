import React from "react";
import { useTranslation } from "react-i18next";
import section3__img1 from './Page1Main__section3Imgs/section3__img1.png'
import section3__img2 from './Page1Main__section3Imgs/section3__img2.png'
import section3__img3 from './Page1Main__section3Imgs/section3__img3.png'
import section3__img4 from './Page1Main__section3Imgs/section3__img4.png'
import section3__img5 from './Page1Main__section3Imgs/section3__img5.png'
import section3__img6 from './Page1Main__section3Imgs/section3__img6.png'
import './Page1Main__section3.css'

function Page1Main__section3() {
    const { t } = useTranslation();

    return (
        <section>
            {/* <h2 className="section3__title">
                Sizning yordamingiz kerak <br />
                <span>firingizni birdiring!</span>
            </h2> */}
            <div className="section3__general">
                <div className="section3__box1">
                    <span>
                        <h2>{t("page2Section3Box1__title1")}</h2>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                    <span>
                        <h2>{t("page2Section3Box1__title2")}</h2>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                    <span>
                        <h2>{t("page2Section3Box1__title3")}</h2>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                    <span>
                        <h2>{t("page2Section3Box1__title4")}</h2>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                    <span>
                        <h2>{t("page2Section3Box1__title5")}</h2>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                <div className="section3__box2__general">
                    <div className="section3__box2__box">
                        <img src={section3__img1} alt="" />
                        <h3>{t("page2Section3Box2__title1")}</h3>
                        <p>{t("page2Section3Box2__title2")}</p>
                    </div>
                    <div className="section3__box2__box">
                        <img src={section3__img2} alt="" />
                        <h3>{t("page2Section3Box2__title1")}</h3>
                        <p>{t("page2Section3Box2__title2")}</p>
                    </div>
                    <div className="section3__box2__box">
                        <img src={section3__img3} alt="" />
                        <h3>{t("page2Section3Box2__title1")}</h3>
                        <p>{t("page2Section3Box2__title2")}</p>
                    </div>
                    <div className="section3__box2__box">
                        <img src={section3__img4} alt="" />
                        <h3>{t("page2Section3Box2__title1")}</h3>
                        <p>{t("page2Section3Box2__title2")}</p>
                    </div>
                    <div className="section3__box2__box">
                        <img src={section3__img5} alt="" />
                        <h3>{t("page2Section3Box2__title1")}</h3>
                        <p>{t("page2Section3Box2__title2")}</p>
                    </div>
                    <div className="section3__box2__box">
                        <img src={section3__img6} alt="" />
                        <h3>{t("page2Section3Box2__title1")}</h3>
                        <p>{t("page2Section3Box2__title2")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page1Main__section3;
