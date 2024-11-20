import React from "react";
import { useTranslation } from "react-i18next";
import './Page1Main__section1.css'

function Page1Main() {
    const { t } = useTranslation();

    return (
        <section className="Page1MainSection1">
            <div className="Page1MainSection1__general">
                <div className="section1__box">
                    <h2>{t("page2Section1Box1__title1")}</h2>
                    <p>{t("page2Section1Box1__title2")}</p>
                </div>
                <div className="section1__box">
                    <h2>{t("page2Section1Box2__title1")}</h2>
                    <p>{t("page2Section1Box1__title2")}</p>
                </div>
                <div className="section1__box">
                    <h2>{t("page2Section1Box3__title")}</h2>
                </div>
            </div>
        </section>
    );
}

export default Page1Main;
