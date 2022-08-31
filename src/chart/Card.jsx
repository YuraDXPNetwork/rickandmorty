import React from "react";

export default function Card({ card }) {
    return (
        <div className="character__card">
            <img src={card.image} alt={card.name} />
            <div className="character__info">
                <div className="name">{card.name}</div>
                <div className="life-species">
                    <span
                        className={card.status === "Alive" ? "alive" : "dead"}
                    ></span>
                    <span>{`${card.status} - ${card.species}`}</span>
                </div>
                <div className="location">
                    <span>Last known location:</span>
                    <span>{card.location.name}</span>
                </div>
                <div className="origin">
                    <span>First seen in:</span>
                    <span>{card.origin.name}</span>
                </div>
            </div>
        </div>
    );
}
