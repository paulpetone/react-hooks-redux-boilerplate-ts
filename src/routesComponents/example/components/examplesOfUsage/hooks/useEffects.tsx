import { useEffect } from 'react'

interface Effects {
  items: Array<string>,
  fetchRepos: Function
}

export default ({ items, fetchRepos }: Effects) => {
  useEffect(() => {
    console.log('componentDidMount example')
    fetchRepos()
  }, [])

  useEffect(() => {
    document.title = `${items.length} items`
    console.log('componentDidUpdate example', items.length)
  }, [items])

  return {}
}
