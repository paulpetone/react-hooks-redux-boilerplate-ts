import enhancer from './hooks'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import { ExampleListProps } from '@interfaces/ExampleInterfaces'
import './examplesOfUsage.styl'

const ExampleList = ({
  items,
  onInputChange,
  handleAddItem,
  graphQLExample,
  repos
}: ExampleListProps) => (
  <div className="examples">
    This is an example using all u gonna need to create any component (store, handlers, state, effects and graphql)
    <br />
    <b>Take a look at components/pageComponents/example/exampleList</b>
    <hr/>
    <Example1 items={items} handleAddItem={handleAddItem} onInputChange={onInputChange} />
    <hr/>
    <Example2 repos={repos} />
    <hr/>
    <Example3 graphQLExample={graphQLExample} />
  </div>
)

export default enhancer(ExampleList)