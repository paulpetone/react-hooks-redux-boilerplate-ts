import { useDispatch } from 'react-redux'

// Actions
import fetchDataAction from '@actions/fetchData'

interface FetcherParams {
  key: string,
  url: string | undefined
}

const useFetcher = () => {
  const dispatch = useDispatch()

  const fetcher = ({ key, url }: FetcherParams) => {
    dispatch(fetchDataAction({ dispatch, key, url }))
  }

  return fetcher
}

export default useFetcher
