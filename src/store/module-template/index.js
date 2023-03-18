import state from './state'
import * as action from './actions'
import * as mutation from './mutations'
import * as getter from './getters'

export default myCustomModule = {
    namespaced: true,
    action,
    mutation,
    getter
}