const fs = require('fs');
const path = require('path');
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(UpgradeHelper);
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy('./src/css/styles.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/about/images');
  
  eleventyConfig.addFilter("svgContents", function(filePath) {
    const cleanPath = filePath.replace(/^\.?\//, ''); // Remove leading ./ or /
    const svgPath = path.join(__dirname, 'src', cleanPath);
    
    try {
      return fs.readFileSync(svgPath, 'utf8');
    } catch (error) {
      console.error(`Error reading SVG: ${svgPath}`, error.message);
      return '';
    }
  });
  
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}