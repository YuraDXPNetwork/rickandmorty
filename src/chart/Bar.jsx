import React, { useEffect, useState } from "react";
import { findFiveMostPopular, findMostUnpopular } from "../helpers/dataHelper";
import Card from "./Card";
import MostPopular from "./MostPopular";

export default function Bar({ characters }) {
    const [fiveMostPopular, setFiveMostPopular] = useState();
    const [mostPopular, setMostPopular] = useState();
    const [card, setCard] = useState();

    const handleCardChanges = (item, event) => {
        switch (event.type) {
            case "mouseenter":
                setMostPopular("");
                setCard(item);
                break;
            case "mouseleave":
                setCard("");
                const most = findMostUnpopular(characters);
                setMostPopular(most);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (characters) {
            const most = findMostUnpopular(characters);
            const arr = findFiveMostPopular(characters);
            setFiveMostPopular(arr);
            setMostPopular(most);
        }
    }, [characters]);

    return (
        <div className="bar">
            {(card || mostPopular) && <Card card={card || mostPopular} />}
            {fiveMostPopular &&
                fiveMostPopular?.map((item, i) => {
                    return (
                        <MostPopular
                            item={item}
                            index={i}
                            handleCardChanges={handleCardChanges}
                        />
                    );
                })}
        </div>
    );
}
