import { useSelector, useDispatch } from 'react-redux'

interface State {
  items: Array<string>
}

// Actions
import addItemAction from '@actions/addItem'

const useItems = () => {
  const dispatch = useDispatch()

  const addItem = (itemText: string) => {
    if (itemText.length) dispatch(addItemAction(itemText))
  }

  const items = useSelector((state: State) => state.items)

  return {
    items,
    addItem,
  }
}

export default useItems
