module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/tags/count/view",
      handler: "tag.getCount",
    },
  ],
};
