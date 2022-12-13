// const { gql } = require("apollo-server-express");

// const siteTypeDefs = gql`
//   type Site {
//     id: ID!
//     name: String
//     domain: String!
//     owner: String!
//     status: String!
//     domainType: String!
//     portalDesign: String
//     dorikSitePrefix: String
//     globalStyle: String
//     logo: String
//     favicon: String
//     categories: [String]!
//     tags: [String]!
//   }

//   input CreateSiteInput {
//     name: String
//     dorikSitePrefix: String!
//     themeId: ID
//     globalStyle: String
//     favicon: String
//   }

//   input UpdateSiteInput {
//     id: ID!
//     name: String
//     domain: String
//     portalDesign: String
//     owner: String
//     globalStyle: String
//     favicon: String
//   }

//   type Query {
//     getSites: [Site]!
//     getSiteById(id: ID): Site! 
//   }

//   type Mutation {
//     createSite(createSiteInput: CreateSiteInput): Site!
//     updateSiteById(updateSiteInput: UpdateSiteInput): Site!
//     removeSiteById(id: ID!): Boolean!
//   }
// `;

// module.exports = siteTypeDefs;
