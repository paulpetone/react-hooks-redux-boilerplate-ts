import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { example } = useStaticQuery(
    graphql`
      query {
        example {
          nameWithOwner
          url
          anyOtherData {
            hi
            owner {
              id
            }
          }
        }
      }
    `
  )

  return {
    graphQLExample: example,
  }
}
