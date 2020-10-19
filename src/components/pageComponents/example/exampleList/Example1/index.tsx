import { Example1Props } from '@pageComponents/example/interfaces'

export default ({ items, handleAddItem, onInputChange }: Example1Props) =>
    <>
        <h2>Example 1</h2>
        <i>This first {`<ul>`} uses a simple reducer</i>
        <ul>
            {items.map((item, key: Number) => (
            <li key={`example-${key}`}>{item}</li>
            ))}
        </ul>
        <form onSubmit={handleAddItem}>
            <label htmlFor="example-1">Add Item:</label>
            <input
            id="example-1"
            onChange={onInputChange}
            type="text" />
            <button type="submit">Add Item</button>
        </form>
    </>