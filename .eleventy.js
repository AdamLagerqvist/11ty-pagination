const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require('moment');
const { format } = require('date-fns');
const { sv } = 'date-fns/locale';

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addWatchTarget('./src/css/');

    eleventyConfig.addFilter('dateFilter', (value) => {
        moment.locale('sv'); 
        return moment(value).format('LLLL');
        // return format(new Date(value), 'PPPP', { locale: sv });
    })

    eleventyConfig.addPlugin(syntaxHighlight);
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    };
}