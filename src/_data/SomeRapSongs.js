const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
    try {
        let url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=5&exlimit=1&titles=Some+Rap+Songs&explaintext=1&formatversion=2&format=json';

        /* This returns a promise */
        return Cache(url, {
            duration: '1m',
            type: 'json'
        });
    } catch (e) {
        return {
            // my failure fallback data
        };
    }
};