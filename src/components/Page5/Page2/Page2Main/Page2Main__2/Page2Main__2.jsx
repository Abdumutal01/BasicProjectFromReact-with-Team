import React from "react";
// import { useTranslation } from "react-i18next";
import './Page2Main__2.css'
import { Link } from "react-router-dom";

function Page2Main__2() {
    // const { t } = useTranslation();

    return (
        <section className="page2Main2">
            <div className="section1__general">
                <div className="section1__box1">
                    <div className="section1Box1Img section1Box1Img1">

                    </div>
                    <div>
                        <h1 className="section1Box1__title">
                            <span>
                                Qulpinay {""}
                            </span>
                            yetishtirish haqida
                            {/* {t("Section4Box1__title1")} */}
                        </h1>
                        <h3 className="section1Box1__inner">
                            Qulpnay yetishtirish odatda unumdor tuproq, to'g'ri parvarish va sug'orishga asoslangan oddiy qadamlarni talab qiladi. Qulpnay yetishtirish uchun quyidagi tavsiyalarga e'tibor qaratish kerak:
                        </h3>
                        <p className="section1Box1__text">
                            1:
                            Tuproq va joy tanlash: Qulpnay unumdor, qumli-loy tuproqlarda yaxshi o'sadi. Yaxshi yoritilgan, quyosh tushadigan va  shamoldan himoyalangan joy tanlash tavsiya etiladi.
                            {/* {t("Section__title1")} */}
                        </p>
                        <p className="section1Box1__text">
                            2: Parvarish: Qulpnay ekilgan maydonni begona o'tlardan tozalash va zarur holda mineral o'g'itlar bilan oziqlantirish lozim. Bahorda va yozning boshida qulpnayni azotli o‘g‘it bilan, yoz oxiri va kuzda esa kaliy va fosfor bilan oziqlantirish yaxshi natija beradi.
                            {/* {t("Section__title2")} */}

                        </p>
                        <p className="section1Box1__text">
                            3: Parvarish: Qulpnay ekilgan maydonni begona o'tlardan tozalash va zarur holda mineral o'g'itlar bilan oziqlantirish lozim. Bahorda va yozning boshida qulpnayni azotli o‘g‘it bilan, yoz oxiri va kuzda esa kaliy va fosfor bilan oziqlantirish yaxshi natija beradi.
                            {/* {t("Section__title2")} */}

                        </p>
                        <h4 className="section1Box1__inner">
                            Pishish muddati va hosil miqdori.
                            {/* {t("Section4Box2__title2")} */}
                        </h4>
                        <p className="section1Box1__text">
                            • Pishish muddati va hosil miqdori
                            O'rtacha pishish muddati: Qulpnay ko‘chat ekilganidan keyin taxminan 30-40 kun ichida pishadi. <br />
                            •  Yiliga hosil olish: Qulpnay odatda yiliga 1-2 marta hosil beradi, ammo iqlim va parvarish sharoitlariga qarab ba'zi navlar 3-4 martagacha hosil berishi mumkin.
                            {/* {t("Section__title2")} */}

                        </p>
                    </div>
                </div>
                <div className="section1__box1">
                    <div>
                        <h1
                            className="section1Box1__title"
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <span>
                                Bodiring  {""}
                            </span>
                            yetishtirish haqida
                            {/* {t("Section4Box1__title1")} */}
                        </h1>
                        <h3 className="section1Box1__inner">
                            Bodring yetishtirish ham juda ommabop va nisbatan oson bog‘dorchilik turidir. Bodring o'sishi uchun iliq va nam muhit talab qilinadi. Quyida bodring yetishtirish uchun asosiy maslahatlar keltirilgan:
                        </h3>
                        <p className="section1Box1__text">
                            1:
                            Tuproq: Bodring unumdor, yaxshi drenajlangan va ozgina kislotali tuproqda yaxshi o‘sadi. Tuproqni oldindan tayyorlab, chirigan go'ng yoki kompost qo‘shish tavsiya etiladi.
                            {/* {t("Section__title1")} */}
                        </p>
                        <p className="section1Box1__text">
                            2:
                            Ekish va ko'chat tayyorlash: <br />
                            Bodring urug'ini to'g'ridan-to'g'ri dalaga yoki ko'chat qilib tayyorlab ekish mumkin.
                            <br /> •  Ochiq maydonga ekish uchun tuproq harorati 15–20°C dan yuqori bo‘lganda (odatda aprel yoki may oylarida) urug‘lar ekiladi.
                            <br /> •   Ko'chatlar orasida taxminan 30-40 sm, qatorlar orasida esa 60 sm masofa qoldirish lozim.
                            {/* {t("Section__title2")} */}

                        </p>
                        <p className="section1Box1__text">
                            3: O'rtacha pishish muddati: Bodring ko‘chat ekilganidan so‘ng 50-60 kun ichida pishadi.
                            {/* {t("Section__title2")} */}

                        </p>
                        <p className="section1Box1__text">
                            4:  Yiliga hosil olish: Bodring bir mavsumda ko‘p martta hosil berishi mumkin. Muntazam yig‘ib turilsa, uzoq muddat hosil olish imkoniyati bo‘ladi.
                            {/* {t("Section4Box2__title2")} */}
                        </p>
                        <p className="section1Box1__text">
                            5:  Mineral o'g'itlar: Bodring o'sishi uchun azot, fosfor, va kaliyga boy o‘g‘itlar qo‘llash muhim. Ekishdan oldin tuproqni mineral o‘g‘it bilan oziqlantirish yaxshi natijalar beradi
                            {/* {t("Section__title2")} */}

                        </p>
                    </div>
                    <div className="section1Box1Img section1Box1Img2">
                        <Link
                            to='/bodiring'
                            className="section1Box1Img__btn"
                        >
                            Batafsil
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Page2Main__2;
