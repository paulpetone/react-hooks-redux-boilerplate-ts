import { Example2Props } from '@interfaces/ExampleInterfaces'

export default ({ repos }: Example2Props) =>
    <>
        <h2>Example 2</h2>
        <i>This second {`<ul>`} uses an async information from store</i>
        <ul>
            {repos.map((item, key: Number) => (
            <li key={`repos-${key}`}>{item.name}</li>
            ))}
        </ul>
    </>
