const eleventy = require("eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/')

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};