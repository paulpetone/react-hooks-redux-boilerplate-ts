export interface ExampleListProps {
  graphQLExample: GraphQLExample,
  repos: Array<Repo>,
  items: Array<Item>,
  handleAddItem(e: React.FormEvent<HTMLFormElement>): void,
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export interface Example1Props {
  items: Array<Item>,
  handleAddItem(e: React.FormEvent<HTMLFormElement>): void,
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export interface Example2Props {
  repos: Array<Repo>
}

export interface Example3Props {
  graphQLExample: GraphQLExample
}

export interface Item {
  item: string
}

export interface Repo {
  name: string
}

export interface Owner {
  id: Int32Array
}

export interface AnyOtherData {
  hi: string,
  owner: Owner
}

export interface GraphQLExample {
  id: string,
  nameWithOwner: string,
  anyOtherData: AnyOtherData
}
