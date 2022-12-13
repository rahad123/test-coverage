const Site = require("./sites.model");

module.exports = {
  getSites: async () => {
    return Site.find({});
  },
  getSite: async ({ id: _id }) => {
    return Site.findById({ _id });
  },
  removeSite: async ({ id: _id }) => {
    return Site.findByIdAndDelete({ _id });
  },
  createSite: async (site) => {
    return Site.create(site);
  },
  updateSite: async ({ id: siteId, ...args }) => {
    return Site.findByIdAndUpdate(siteId, args, { new: true });
  },
};
