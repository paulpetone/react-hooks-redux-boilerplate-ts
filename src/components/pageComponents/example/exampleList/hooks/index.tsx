import composeHooks from '@helpers/composeHooks'
import handlers from './handlers'
import state from './state'
import graphql from './graphql'
import effects from './effects'
import useItems from './useItems'
import useRepos from './useRepos'

export default composeHooks(
    useItems,
    useRepos,
    graphql,
    state,
    handlers,
    effects
)