import state from './state'
import * as action from './actions'
import * as mutation from './mutations'
import * as getter from './getters'

const journal = {
    namespaced: true,
    action,
    getter,
    mutation,
    state,
}

export default journal
