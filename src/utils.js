// I stuck this in 'utils' because I did not want
// components and middleware to know exactly how to format the URL query.

export function setMapQuery(mapSettings) {
    // Pack the reasonably named state settings into a compact querystring format
    const query = {}
    // In real life, I'd convert center coord to geohash here.
    if (typeof mapSettings.center !== 'undefined') query["g"] = mapSettings.center
    if (typeof mapSettings.zoom !== 'undefined')   query["z"] = mapSettings.zoom

    return query
}
