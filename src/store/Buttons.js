export const strModule = {
    state: () => ({
        str: ''
    }),
    getters:{
        getStr(state){
            return state.str
        }
    },
    mutations:{
        updateStr(state, num){
            if(state.str.length < 10){
                state.str += num.toString()
            }
        },
        cancel(state){
            state.str = ''
        },
        clear(state){
            state.str = state.str.substring(0, state.str.length - 1);
        }
    }

}