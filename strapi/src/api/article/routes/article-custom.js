"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/article/slug/:slug",
      handler: "article.getBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
