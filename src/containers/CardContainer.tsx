import React from 'react';

export default function CardContainer() {

    type FlashCard = {
        frontContent: string,
        backContent: string;
    }

    const displayCards = (card: FlashCard) => {
        return(
            <div>
                <p>{card.frontContent}</p>
                <p>{card.backContent}</p>
            </div>
        )
    }

    return (
        <div className="w-96 h-64 bg-yellow-200"> 
            {displayCards({frontContent: "Test", backContent: "Test"})}
        </div>
    )
}
