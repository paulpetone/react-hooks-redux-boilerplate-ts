interface InputChange {
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

interface Event {
  preventDefault: Function
}

interface AddItem {
  inputValue: string,
  addItem: (itemText: string) => void
}

export default () => ({
  onInputChange: ({ setInputValue }: InputChange) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  },
  handleAddItem: ({ inputValue, addItem }: AddItem) => (e: Event) => {
    e.preventDefault()
    addItem(inputValue)
  },
})
