// I stuck this in 'utils' because I did not want
// components and middleware to know exactly how to format the URL query.

export function getMapQuery(query) {
    // Unpack my query into an object that I can understand.

    // In real life, I'd convert geohash from query to center coord here.
    return {
        center: query.g,
        zoom: query.z
    }
}

export function setMapQuery(mapSettings) {
    // Pack the reasonably named state settings into a compact querystring format
    const query = {}
    // In real life, I'd convert center coord to geohash here.
    if (typeof mapSettings.center !== 'undefined') query["g"] = mapSettings.center
    if (typeof mapSettings.zoom !== 'undefined')   query["z"] = mapSettings.zoom

    return query
}
