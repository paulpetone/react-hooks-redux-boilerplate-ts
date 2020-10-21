import composeHooks from "@helpers/composeHooks"
import useHandlers from "./useHandlers"
import useStates from "./useStates"
import useGraphQLData from "./useGraphQLData"
import useEffects from "./useEffects"
import useItems from "./useItems"
import useRepos from "./useRepos"

export default composeHooks(
  useItems,
  useRepos,
  useGraphQLData,
  useStates,
  useHandlers,
  useEffects
)
