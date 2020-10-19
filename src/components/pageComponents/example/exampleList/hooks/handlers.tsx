interface HandlersProps {
  inputValue: string,
  addItem: (itemText: string) => void,
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export default ({ inputValue, addItem, setInputValue }: HandlersProps) => ({
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  },
  handleAddItem: (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addItem(inputValue)
  },
})
