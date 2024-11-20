import React from "react";
import PageMain1 from "./PageMain1/Page1__section1";
import PageMain2 from "./PageMain2/Page1__section1";

function Page1Main({ t }) {

    return (
        <main>
            <div className="container">
                <PageMain1 t={t} />
                <PageMain2 t={t} />
            </div>
        </main>
    )
}

export default Page1Main