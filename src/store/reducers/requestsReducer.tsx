interface Action {
  type: string
  requestData: {
    url: string
    key: string
    dispatch: Function
    method: string
    body: any
  }
  responseData: {
    result: any
    responseKey: string
    status: string
  }
}

const INITIAL_STATE: any = {}

export default (
  state = INITIAL_STATE,
  { type, requestData, responseData }: Action
) => {
  switch (type) {
    case "FETCH_DATA":
      const { url, key, method, body, dispatch } = requestData

      const fetchData = async () => {
        try {
          const response = await fetch(url, { method, body })
          const result = await response.json()

          dispatch({
            type: "SET_DATA",
            responseData: { result, status: "done", responseKey: key },
          })
        } catch (error) {
          dispatch({
            type: "SET_DATA",
            responseData: { status: error.message, responseKey: key },
          })
        }
      }
      fetchData()

      return {
        ...state,
        [key]: {
          ...state[key],
          status: "pending",
        },
      }
    case "SET_DATA":
      const { result, responseKey, status } = responseData
      return {
        ...state,
        [responseKey]: {
          ...state[responseKey],
          result,
          status,
        },
      }
    default:
      return state
  }
}
