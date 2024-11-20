import React from "react";
import { useTranslation } from "react-i18next";
import HeroHeader__img1 from './Page1HeaderImgs/HeroHeader__img1.png'
import HeroHeader__img2 from './Page1HeaderImgs/HeroHeader__img2.png'
import HeroHeader__img3 from './Page1HeaderImgs/HeroHeader__img3.png'
import HeroHeader__img4 from './Page1HeaderImgs/HeroHeader__img4.png'
import HeroHeader__img5 from './Page1HeaderImgs/HeroHeader__img5.png'
import HeroHeader__img6 from './Page1HeaderImgs/HeroHeader__img6.png'
import HeroHeader__img7 from './Page1HeaderImgs/HeroHeader__img7.png'
import './Page1Header.css'

function Page1Header() {
    const { t, i18n } = useTranslation();

    return (
        <section className="page1__smallSection">
            <div className="container">
                <h1>{t("page2Title")}</h1>
                <div className="hero__header">
                    <div className="hero__box">
                        <img src={HeroHeader__img1} alt="" />
                        <span>
                            <h4>{t("page2Title1")}</h4>
                            <p>{t("page2Title2")}</p>
                        </span>
                    </div>
                    <div className="hero__box">
                        <img src={HeroHeader__img2} alt="" />
                        <span>
                            <h4>{t("page2Box2__title1")}</h4>
                            <p>{t("page2Box2__title")}</p>
                        </span>
                    </div>
                    <div className="hero__box">
                        <img src={HeroHeader__img3} alt="" />
                        <span>
                            <h4>{t("page2Box3__title1")}</h4>
                            <p>{t("page2Box3__title2")}</p>
                        </span>
                    </div>
                    <div className="hero__box">
                        <img src={HeroHeader__img4} alt="" />
                        <span>
                            <h4>{t("page2Box4__title1")}</h4>
                            <p>{t("page2Box4__title2")}</p>
                        </span>
                    </div>
                    <div className="hero__box">
                        <img src={HeroHeader__img5} alt="" />
                        <span>
                            <h4>{t("page2Box5__title1")}</h4>
                            <p>{t("page2Box5__title2")}</p>
                        </span>
                    </div>
                    <div className="hero__box">
                        <img src={HeroHeader__img6} alt="" />
                        <span>
                            <h4>{t("page2Box6__title1")}</h4>
                            <p>{t("page2Box6__title2")}</p>
                        </span>
                    </div>
                    <div className="hero__box">
                        <img src={HeroHeader__img7} alt="" />
                        <span>
                            <h4>{t("page2Box7__title1")}</h4>
                            <p>{t("page2Box7__title2")}</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page1Header;
