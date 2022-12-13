// const {
//   getSites,
//   getSite,
//   createSite,
//   updateSite,
//   removeSite,
// } = require("./sites.service");
// const logger = require("../../utils/logger");

// const siteResolvers = {
//   Query: {
//     getSites: async (_, args, ctx) => {
//       const sites = await getSites(args);
//       return sites;
//     },

//     getSiteById: async (_, args, ctx) => {
//       const site = await getSite(args);
//       return site;
//     },
//   },

//   Mutation: {
//     createSite: async (_, args, ctx) => {
//       const { createSiteInput } = args;
//       const site = await createSite(createSiteInput);
//       return site;
//     },

//     updateSiteById: async (_, args, ctx) => {
//       const { updateSiteInput } = args;
//       const site = await updateSite(updateSiteInput);
//       return site;
//     },

//     removeSiteById: async (_, args, ctx) => {
//       const { id } = args;
//       const site = await removeSite(id);
//       return site;
//     },
//   },
// };

// module.exports = siteResolvers;
