import { client } from '@/lib/apollo'
import { gql } from '@apollo/client'

export const getPinnedRepos = client.query({
  query: gql`
    {
      user(login: "revogabe") {
        id
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                description
                name
                url
                languages(
                  first: 10
                  orderBy: { field: SIZE, direction: DESC }
                ) {
                  edges {
                    node {
                      id
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
})

export const getUser = client.query({
  query: gql`
    {
      user(login: "revogabe") {
        name
        url
        location
        bio
        avatarUrl
      }
    }
  `,
})
