import { IdNumber, ItemString, NameString } from '@interfaces/SharedInterfaces'

export interface ExampleListProps {
  graphQLExample: GraphQLExample,
  repos: Array<NameString>,
  items: Array<ItemString>,
  handleAddItem(e: React.FormEvent<HTMLFormElement>): void,
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export interface Example1Props {
  items: Array<ItemString>,
  handleAddItem(e: React.FormEvent<HTMLFormElement>): void,
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export interface Example2Props {
  repos: Array<NameString>
}

export interface Example3Props {
  graphQLExample: GraphQLExample
}

export interface AnyOtherData {
  hi: string,
  owner: IdNumber
}

export interface GraphQLExample {
  url: string,
  nameWithOwner: string,
  anyOtherData: AnyOtherData
}
