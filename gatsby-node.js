const axios = require('axios')

// You can delete this file if you're not using it
exports.sourceNodes = ({actions, createNodeId, createContentDigest}) => {
  const { createNode } = actions

  return axios.get('https://ratings.food.gov.uk/enhanced-search/en-GB/india%20gate/Cardiff/Relevance/0/%5E/EqualAll/0/1/10/json')
  .then(nodeContent => {
    const { EstablishmentDetail } = nodeContent.data.FHRSEstablishment.EstablishmentCollection
    const data = JSON.stringify(EstablishmentDetail)

    const nodeMeta = {
      id: createNodeId(`food-hygiene`),
      parent: null,
      children: [],
      internal: {
        type: `foodHygiene`,
        mediaType: `text/html`,
        content: data,
        contentDigest: createContentDigest(EstablishmentDetail)
      }
    }
    const node = Object.assign({}, EstablishmentDetail, nodeMeta)
    createNode(node)
  })
}