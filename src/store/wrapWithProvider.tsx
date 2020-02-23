import { Provider } from 'react-redux'
import store from './createStore'

interface Props {
  element: JSX.Element
}

export default ({ element }: Props) => {
  return <Provider store={store}>{element}</Provider>
}
