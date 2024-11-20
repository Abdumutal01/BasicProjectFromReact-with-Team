import React from "react";
import Page1MainSection from './Page1Main__section1/Page1Main__section1'
import Page1MainSection2 from "./Page1Main__section2/Page1Main__section2";
import Page1MainSection3 from "./Page1Main__section3/Page1Main__section3";
import Page1MainSection4 from "./Page1Main__section4/Page1Main__section4";
function Page1Main() {
    return (
        <main>
            <div className="container">
                <Page1MainSection />
                <Page1MainSection2 />
                <Page1MainSection3 />
                <Page1MainSection4 />
            </div>
        </main>
    )
}

export default Page1Main;