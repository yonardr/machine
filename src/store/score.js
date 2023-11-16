export const score = {
    state: () => ({
        str: '',
        price: '',
        tel: '',
        scan: ''
    }),
    getters:{
        getScore(state){
            return state.str
        },
        getPrice(state){
            return state.price
        },
        getTel(state){
            return state.tel
        },
        getScan(state){
            return state.scan
        }
    },
    mutations:{
        updateScore(state){
            state.str =  Math.floor(Math.random() * 9999999999).toString();
        },
        updatePrice(state){
            state.price =  Math.floor(Math.random() * 9999).toString();
        },
        updateTel(state){
            state.tel = '+79' + Math.floor(Math.random() * 999999999).toString();
        },
        updateScan(state, val){
            state.scan = val
        }
    }
}