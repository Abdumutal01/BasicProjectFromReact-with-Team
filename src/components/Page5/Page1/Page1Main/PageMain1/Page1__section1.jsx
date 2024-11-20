import React from "react";
import './Page1Main__section1.css'

function PageMain1({ t }) {

    return (
        <section className="page5">
            <div className="container">
                <div className="page5__box1">
                    <h3 className="page5__title">
                        <span> {t("page5Title1")} </span>
                        {t("page5Title2")}
                    </h3>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <div>
                        <h1 className="page5__title2">
                            {t("page5Title3")}
                        </h1>
                        <h4 className="page5__title3">
                            {t("page5Title4")}
                        </h4>
                        <p className="page5__texts">
                            1:{t("page5Texts1")}

                        </p>
                        <p className="page5__texts">
                            2:
                            {t("page5Texts1")}
                        </p>
                        <p className="page5__texts">
                            3:
                            {t("page5Texts1")}
                        </p>
                        <p className="page5__texts">
                            4:
                            {t("page5Texts4")}
                        </p>
                        <p className="page5__texts">
                            5:
                            {t("page5Texts5")}
                        </p>
                    </div>
                    <img
                        style={{
                            width: "444px",
                            height: "576px"
                        }}
                        className="page5__gedraImg"
                        src="https://s3-alpha-sig.figma.com/img/6151/b37f/1cb95ceccc66d2055385c1425dd30062?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RY4JwNCJZM52CtJiWosqcpDngUxpi1TLAs1oVJzuZqTFG4bNohwaOKXdXEQzzOx3mdRW7~pJcHaXYshN5BfdKlPsA9ijfpANMfR-5Bl4zoRE-sDicv1-QHHfYw8r2TMkgqsR4J~HbT6zULjLJo0zNY6RUdZrssLxl8cayziGnUo1E5ESjUXedNxKScxSYW~bXFt0kPFzUxcaW624gd3UOah-yw~YQZ81RKNk7y2hUqpZmqOV6TIFLYP~aEgSmSkfhOwucxOd96iijC5zRllyRgZtkD26OYcmC1DeC8JI84yzhpTpKuXWcdFzu5tdsGCjqgsaB5UC3nPPg9~46GriJA__"
                        alt=""
                    />
                </div>
            </div>

        </section>
    );
}

export default PageMain1;
