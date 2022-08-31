import React, { useEffect, useState } from "react";
import { findMostUnpopular } from "../helpers/dataHelper";
import "./Character.css";

export default function Character({ characters }) {
    const [mostUnpopular, setMostUnpopular] = useState();

    useEffect(() => {
        if (characters) {
            const mostUnpopular = findMostUnpopular(characters);
            setMostUnpopular(mostUnpopular);
        }
    }, [characters]);

    return (
        <div className="table__wrapper">
            <table>
                <tbody>
                    <tr>
                        <td>Character name</td>
                        <td>{mostUnpopular?.name}</td>
                    </tr>
                    <tr>
                        <td>Origin name</td>
                        <td>{mostUnpopular?.origin.name}</td>
                    </tr>
                    <tr>
                        <td>Origin dimension</td>
                        <td>{mostUnpopular?.location.name}</td>
                    </tr>
                    <tr>
                        <td>Popularity</td>
                        <td>{mostUnpopular?.episode.length}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
