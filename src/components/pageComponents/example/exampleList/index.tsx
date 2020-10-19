import enhancer from './hooks'
import { ExampleListProps } from './interfaces'

const ExampleList = ({
  items,
  onInputChange,
  handleAddItem,
  graphQLExample,
  repos
}: ExampleListProps) => {
  return (
    <>
      This is an example using all u gonna need to create any component (store,
      handlers, state and effects)
      <br />
      <b>Take a look at components/pageComponents/example/exampleList</b>
      <br />
      <br />
      <br />
      <h2>Example 1</h2>
      <i>This first {`<ul>`} uses a simple reducer</i>
      <ul>
        {items.map((item, key: Number) => (
          <li key={`example-${key}`}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <label htmlFor="example-1">Add Item -></label>
        <input
          id="example-1"
          onChange={onInputChange}
          type="text"
        />
        <button type="submit">Add Item</button>
      </form>
      <br />
      <br />
      <br />
      <h2>Example 2</h2>
      <i>This second {`<ul>`} uses an async information from store</i>
      <ul>
        {repos.map((item, key: Number) => (
          <li key={`repos-${key}`}>{item.name}</li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <h2>Example 3</h2>
      <i>
        This third example uses gatsby-node.js to fetch data from API and set it to Graphql, and to retrieve this data
        we are using the following file: @pageComponents/example/exampleList/graphql.tsx <br/>
        This is very useful for SEO issues!
      </i>
      <br/>
      <br/>
      Id: {graphQLExample.id}
      <br/>
      <br/>
      NameWithOwner: {graphQLExample.nameWithOwner}
      <br/>
      <br/>
      AnyOtherData.Hi: {graphQLExample.anyOtherData.hi}
      <br/>
      <br/>
      AnyOtherData.Owner.id: {graphQLExample.anyOtherData.owner.id}
    </>
  )
}

export default enhancer(ExampleList)