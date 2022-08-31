import React from "react";

export default function MostPopular({ handleCardChanges, item, index }) {
    return (
        <span
            onMouseEnter={(event) => handleCardChanges(item, event)}
            onMouseLeave={(event) => handleCardChanges(item, event)}
            style={{
                height: `${item.episode.length * 5}px`,
                background: `linear-gradient(0deg, rgba(31,${
                    item.episode.length * 2
                },164,1) 0%, rgba(0,212,${item.episode.length * 5},1) 100%)`,
                // backgroundColor: `rgb(20,250,${item.episode.length * 5})`,
            }}
            key={`${index}_${item.name}`}
            className="bar__character"
        >
            {item.name}
        </span>
    );
}
