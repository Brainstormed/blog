const {
    DateTime
} = require("luxon")

const eleventy = require("eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/')
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};