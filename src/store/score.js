export const score = {
    state: () => ({
        str: ''
    }),
    getters:{
        getScore(state){
            return state.str
        }
    },
    mutations:{
        updateScore(state){
            state.str =  Math.floor(Math.random() * 9999999999).toString();
        },
    }
}