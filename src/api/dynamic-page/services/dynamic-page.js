'use strict';

/**
 * dynamic-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dynamic-page.dynamic-page');
