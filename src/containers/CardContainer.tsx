import React from 'react';

export default function CardContainer( props: { allCards: any; } ) {


    const displayCards = () => {
        return props.allCards.map((card: { cardFront: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; cardBack: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; cardBack2: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
            return(
                <>
                    <h1>{card.cardFront}</h1>
                    <h2>{card.cardBack}</h2>
                    <h2>{card.cardBack2}</h2>
                </>
            )
        })
    }

    return (
        <div className="w-96 h-64 bg-yellow-200"> 
            {displayCards()}
        </div>
    )
}
