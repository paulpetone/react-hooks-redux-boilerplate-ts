import { Example3Props } from '@interfaces/ExampleInterfaces'

export default ({ graphQLExample }: Example3Props) =>
    <>
        <h2>Example 3</h2>
        <i>
        This third example uses gatsby-node.js to fetch data from API and set it to Graphql, and to retrieve this data
        we are using the following file: @routesComponents/example/examplesOfUsage/hooks/useGraphQLData.tsx <br />
        This is very useful for SEO issues!
        </i>
        <br />
        <br />
        <i>Url: {graphQLExample.url}</i>
        <br />
        <br />
        <i>NameWithOwner: {graphQLExample.nameWithOwner}</i>
        <br />
        <br />
        <i>AnyOtherData.Hi: {graphQLExample.anyOtherData.hi}</i>
        <br />
        <br />
        <i>AnyOtherData.Owner.id: {`${graphQLExample.anyOtherData.owner.id}`}</i>
    </>