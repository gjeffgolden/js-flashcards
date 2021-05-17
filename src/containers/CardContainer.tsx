import React from 'react';

export default function CardContainer( props: { allCards: any; } ) {


    // const displayCards = () => {
    //     return props.allCards.map((card: { cardFront: any; cardBack: any; cardBack2: any; }) => {
    //         return(
    //             <>
    //                 <h1>{card.cardFront}</h1>
    //                 <h2>{card.cardBack}</h2>
    //                 <h2>{card.cardBack2}</h2>
    //             </>
    //         )
    //     })
    // }

    return (
        <div className="w-96 h-64 bg-yellow-200">
            <h1>{props.allCards[2].cardFront}</h1>
            <p>{props.allCards[2].cardBack}</p>
            <p>{props.allCards[2].cardBack2}</p>
        </div>
    )
}
