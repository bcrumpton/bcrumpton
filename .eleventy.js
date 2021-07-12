const svgContents = require("eleventy-plugin-svg-contents");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/styles.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/about/images');
  eleventyConfig.addPassthroughCopy('./src/work/**/images/*.png');
  eleventyConfig.addWatchTarget('./src/*')
  eleventyConfig.addPlugin(svgContents);
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}