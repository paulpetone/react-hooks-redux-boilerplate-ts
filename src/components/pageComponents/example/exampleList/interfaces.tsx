export interface ExampleListProps {
  items: Array<Item>,
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void,
  handleAddItem(e: React.FormEvent<HTMLFormElement>): void,
  graphQLExample: GraphQLExample,
  repos: Array<Repo>
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
