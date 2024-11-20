import React from 'react'
import './ShoppingPage.css'
import shoppingJson from '../../assets/json/ShoppingPage.json'
import ShoppingCard from './ShoppingCard/ShoppingCard'

export default function ShoppingPage({t}) {
    return (
        <section className='shopping'>
            <div className="container">
                <h2 className="shopping__title">
                    {t("page1Title1")} <span>{t("page1Title2")}</span>
                </h2>
                <div className="shopping__general">
                    {
                        shoppingJson.map((item, i) => (
                            <ShoppingCard
                                id={i}
                                item={item}
                                t={t}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
