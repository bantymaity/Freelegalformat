module.exports = function(eleventyConfig) {
  // এটি Eleventy-কে বলে দেবে যেন সে images ফোল্ডারটিকেও লাইভ সাইটে পাঠায়
  eleventyConfig.addPassthroughCopy("images");
};
