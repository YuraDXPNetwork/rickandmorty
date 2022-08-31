import axios from "axios";

export const fetchCharacters = async () => {
    try {
        const response = await axios.get(
            "https://rickandmortyapi.com/api/character"
        );
        const {
            data: { results },
        } = response;
        return results;
    } catch (error) {
        console.log(error);
        return;
    }
};

export const findMostPopular = (characters) => {
    let mostPopularCharacter;

    characters.forEach((e) => {
        switch (true) {
            case !mostPopularCharacter:
                mostPopularCharacter = e;
                break;
            case e.location.name.match("Earth c-137"):
                if (mostPopularCharacter.episode.length > e.episode.length) {
                    mostPopularCharacter = e;
                }
                break;
            default:
                break;
        }
    });
    return mostPopularCharacter;
};

export const findFiveMostPopular = (characters) => {
    let filteredArr = characters;
    let fiveMostPopular = [];
    while (fiveMostPopular.length !== 5) {
        let mostPopular = findMostPopular(filteredArr);
        fiveMostPopular.push(mostPopular);
        filteredArr = filteredArr.filter((e) => e.name !== mostPopular.name);
    }
    return fiveMostPopular;
};

export const findMostUnpopular = (characters) => {
    let mostUnpopularCharacter;
    characters.forEach((e) => {
        switch (true) {
            case !mostUnpopularCharacter:
                mostUnpopularCharacter = e;
                break;
            case e.location.name.match("Earth c-137"):
                if (mostUnpopularCharacter.episode.length > e.episode.length) {
                    mostUnpopularCharacter = e;
                }
                break;
            default:
                break;
        }
    });
    return mostUnpopularCharacter;
};
