'use strict';

const {getTelegramBot} = require("../../../extensions/telegram");
/**
 * article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article.article', ({ strapi }) =>  ({
  async getBySlug(slug) {
    const result = await strapi.entityService.findMany('api::article.article', {
      filters: {
        slug,
        publishedAt: {
          $null: false,
        },
      },
    });

    if (!result?.length) {
      return;
    }

    return result[0];
  },
}));
