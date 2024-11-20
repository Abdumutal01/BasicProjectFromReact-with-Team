import React from "react";
// import { useTranslation } from "react-i18next";
import "./Page2Main__section2.css"

function PageMain2({ t }) {
    // const { t, i18n } = useTranslation();

    return (
        <section>
            <div className="Page2"><br /><br />
                <div className="container">
                    <h2 className="Section2__tittle3">
                        {t("page5_2Title1")}
                    </h2>
                    <div className="btn3">
                        <button className="btn3n">
                            {t("page5_2Btn1")}

                        </button>
                        <button className="btn3n">
                            {t("page5_2Btn2")}

                        </button>
                        <button className="btn3n">
                            {t("page5_2Btn3")}
                        </button>
                    </div>
                </div>
            </div>

            <div className="Page2__imgBox">
                <img
                    className="Page2__img"
                    src="https://s3-alpha-sig.figma.com/img/48b1/9747/67334222591c8994239241918a6bad68?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oBrmq6xwx79UXmM4sqT~GgQVfol9l7o4JZRCeZeY2ixBmziJ5A5sSis5ZLdl0y4wzzHEf753YJ1vDwfmIjC7ysEWdXLC3lJun11JHW2xhHJ8~xQg0xkOW9HBM3BMazBApKY2zxmlMs~olYoMF5aUAK3bQ7OopdbhAP-R5040qn3KTCvYWEbE5nsy1ivc1oFw2pwdwgrK1tbQW5SbYOVJ4nN3S-VCfOeAukUvwP03oiN8YGKYWyIymEf2N1Spp4-4uJ~xepNRKbbFvXtg-1RTI77hmGF3VeoUl-xs39Ag5yFBkERegE6lrw10n8yP~-4G8VgRnyer3RHu37x6UnFfAw__"
                    alt=""
                />

                <div className="imgBox1">
                    <img
                        className="Page2__img Page2__img2"
                        src="https://s3-alpha-sig.figma.com/img/ee65/1dab/f05bc1b5eaef61eef315b3f6a31903ee?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IOUm9HkTU4vm~2Cq8oNqhN2hCBukpxvb9-hnHLXSSy4k0qd5k7dATvDCeQeWxnojP5EGmq1U5mt0nfXLUyWbsD6MdQpuVvUqw4cl62205YUW2-UJbTC75-X0TEPVBcidm9SWlIEq5gbD6ZOr9q8Cqgmt0LKG6kK1mXW35L~tHE0XA3EuvimZUKhyjI5cOieLAZhccc0GdcGNjdaPuGebP9jymS40EBEamEWCSlh5Cy1Xuh~wpYKJNTxMlx6Fg4G2n76ZfaKvxfzbndjHRzwN~KfjULGcq2B8NF0wwJCIajqoO44gEwre1iYyC2Xvr5xviIGomNT40GxXzauBBlDQzg__"
                        alt=""
                    />
                    <div className="imgBox2">
                        <img
                            className="Page2__img"
                            src="https://s3-alpha-sig.figma.com/img/7381/a42f/380f51ccff43b775db5f84d57f69f3f8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBS0Wwk79r5rkYltJNtUHeclLGHV7DpqmrcX6ERZJmXQRuEcjtB0qkPctkL~-dd6A6RQK2lrsdW1ouB6G~kSi1304wH1HRUyBBu84jIysc-Co5cpwicly0LASZd4KfeqKXahMCHhUpci2bcjrYCNxFNFYplQRfsu~-u9DUuOQR1Wz-TbaVfiwtfVrGlSt9urdcVAvsXIfwwrWsp6C4kDAYPvotR63Sz1~WHxeO3d2sg0lL~V~avGttAf4QjzOFGkUjTKqGjQlHrD5ryT1tO3GJjBlS8NlXMbOiKPrX-HR4zP4peollSK7QJVSbvRHZ-Zb7urggCX8IYJ1GhlZjSAlg__"
                            alt=""
                        />
                        <img
                            className="Page2__img"
                            src="https://s3-alpha-sig.figma.com/img/d20b/df72/8b525b20367283cdfd9996c74acea657?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RapAETFCfJiLpfmvaVgo8PGHlsqVAjoZfLPB-9NwM7FTSwEZp~5Pv9A-WETjKAPmHpYfL6jPuix6oYmL2PdiXLweagRd92HJvUjvji8JdIWsa4Ck-upPvUfmG1XlGUFJeX1VdTy3mB~q3p425AHfChAK7gBXz94xnENCX~CmAYuL58RYVuDlsmsRYNw85AGOyuu2RRr2m7qFQL6n9cMcAHcAO-FM7qhlUITsAIXlLPzzQ5aOptfDeG1BAvrT6bKuPyFpVf69ux~v6bWaleA8wom2sMk5WzLprxkNUGt1H2rzlqUsTMbsYV3QLZi9Qgz~kh6fF2W-ON7h~3tsiBgvSQ__"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageMain2;
