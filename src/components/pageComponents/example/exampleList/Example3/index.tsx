import { Example3Props } from '@pageComponents/example/interfaces'

export default ({ graphQLExample }: Example3Props) =>
    <>
        <h2>Example 3</h2>
        <i>
        This third example uses gatsby-node.js to fetch data from API and set it to Graphql, and to retrieve this data
        we are using the following file: @pageComponents/example/exampleList/graphql.tsx <br />
        This is very useful for SEO issues!
        </i>
        <br />
        <br />
        Id: {graphQLExample.id}
        <br />
        <br />
        NameWithOwner: {graphQLExample.nameWithOwner}
        <br />
        <br />
        AnyOtherData.Hi: {graphQLExample.anyOtherData.hi}
        <br />
        <br />
        AnyOtherData.Owner.id: {graphQLExample.anyOtherData.owner.id}
    </>