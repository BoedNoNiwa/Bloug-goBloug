import { request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts = async () => {
    const query = gql `
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                        authors {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        content {
                            html
                        }
                    }
                }
            }
        }
    `;
    const results = await request(graphqlAPI, query);
    return results.postsConnection.edges;
};
export const getPostDetails = async (slug) => {
    const query = gql `
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          featuredImage {
            url
          }
          authors{
            name
            bio
            photo {
              url
            }
          }
          publishedBy {
            name
            picture
          }
          createdAt
          slug
          content {
            html
          }
          categories {
            name
            slug
          }
        }
      }
    `;
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
};

export const getProjectDetails = async() => {
  const query = gql`
    query getProjectDetails {
      projectsConnection {
        edges {
          node {
            title
            excerpt
            repoSlug
            demoSlug
          }
        }
      }
    }
  `
  const results = await request(graphqlAPI, query);
  return results.projectsConnection.edges;
}
