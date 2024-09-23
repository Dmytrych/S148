'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({strapi}) => ({
  async getBySlug(ctx) {
    try {
      await this.validateQuery(ctx);

      if (!ctx?.params?.slug) {
        ctx.badRequest("Invalid slug")
        return
      }

      const data = await strapi.service('api::article.article').getBySlug(ctx.params.slug)

      const sanitizedOutput = await this.sanitizeOutput(data, ctx)

      return this.transformResponse(sanitizedOutput)
    } catch (err) {
      ctx.throw(err)
    }
  }
}));
