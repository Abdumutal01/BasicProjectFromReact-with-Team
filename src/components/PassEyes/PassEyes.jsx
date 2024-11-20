import React from 'react'

export default function PassEyes({setEyes}) {
    const controllEyes = () => {
        setEyes(prev => !prev)
    }
    return (
        <i
            onClick={controllEyes}
            class="fa-solid fa-eye"
        >

        </i>
    )
}
