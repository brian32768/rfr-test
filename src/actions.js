export const setGeohash = (geohash) => {
    return {
        type: "SETGEOHASH",
        payload: geohash
    }
};
