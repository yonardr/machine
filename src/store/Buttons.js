export const strModule = {
    state: () => ({
        str: '',
        tel: ''
    }),
    getters:{
        getStr(state){
            return state.str
        },
        getTelStr(state){
            return state.tel
        }
    },
    mutations:{
        updateStr(state, num){
            if(state.str.length < 10){
                state.str += num.toString()
            }
        },
        cancelExit(state){
            state.str = ''
            state.tel = ''
        },
        clear(state){
            state.str = state.str.substring(0, state.str.length - 1);
        },
        updateTelStr(state, num){
            if(state.tel.length < 12){
                state.tel += num.toString()
            }
        },
        clearTel(state){
            state.tel = state.tel.substring(0, state.tel.length - 1);
        }
    }

}