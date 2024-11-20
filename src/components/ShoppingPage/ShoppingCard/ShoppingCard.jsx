import React from 'react'
import './ShoppingCard.css'

export default function ShoppingCard({ item, id, t }) {
    return (
        <div
            key={id}
            className='ShoppingCard'
        >
            <img
                src={item.img}
                alt=""
                className="ShoppingCard__img"
            />
            <h2 className="ShoppingCard__inner">
                {item.name}
            </h2>
            <h3 className='ShoppingCard__empt'>

            </h3>
            <h3 className='ShoppingCard__empt'>

            </h3>
            <div className="ShoppingCard__box">
                <p
                    className="ShoppingCard__price"

                >
                    {item.price} k/so’m
                </p>
                <button className="ShoppingCard__shopBtn">
                    {t("page1Btn")}
                </button>
            </div>
        </div>
    )
}
