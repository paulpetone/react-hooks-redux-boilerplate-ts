import enhancer from './hooks'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import { ExampleListProps } from './interfaces'

const ExampleList = ({
  items,
  onInputChange,
  handleAddItem,
  graphQLExample,
  repos
}: ExampleListProps) => (
  <>
    This is an example using all u gonna need to create any component (store,
      handlers, state and effects)
    <br />
    <b>Take a look at components/pageComponents/example/exampleList</b>
    <br /><br /><br />
    <Example1 items={items} handleAddItem={handleAddItem} onInputChange={onInputChange} />
    <br /><br /><br />
    <Example2 repos={repos} />
    <br /><br /><br />
    <Example3 graphQLExample={graphQLExample} />
  </>
)

export default enhancer(ExampleList)