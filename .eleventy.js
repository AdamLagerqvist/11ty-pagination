const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require("moment")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addWatchTarget('./src/css/');

    eleventyConfig.addFilter('dateFilter', (value) => {
        moment.locale('sv'); 
        return moment(value).format('LL');
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