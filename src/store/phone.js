export const phoneModule = {
    state: () => ({
        smsTel: false,
        smsCode: false,
        Code: '',
        codeStr: '',
        smsBalance: false,
        balance: ''
    }),
    getters: {
        ShowSms(state) {
            return state.smsTel
        },
        ShowSmsCode(state) {
            return state.smsCode
        },
        ShowCode(state) {
            return state.Code
        },
        ShowCodeStr(state) {
            return state.codeStr
        },
        ShowSmsBalance(state) {
            return state.smsBalance
        },
        ShowBalance(state) {
            return state.balance
        }
    },
    mutations: {
        updateSms(state) {
            state.smsTel = true
        },
        updateSmsCode(state) {
            state.Code = Math.floor(Math.random() * 9).toString() + Math.floor(Math.random() * 9).toString() + Math.floor(Math.random() * 9).toString() + Math.floor(Math.random() * 9).toString();
        },
        updateSmsBalance(state) {
            state.smsBalance = true
        },
        updateShowCode(state) {
            state.smsCode = true
        },
        updateCodeStr(state, num) {
            if (state.codeStr.length < 4) {
                state.codeStr += num.toString()
            }
        },
        clearCodeStr(state) {
            state.codeStr = ''
        },
        clear2(state) {
            state.smsTel = false
            state.smsCod = false
            state.Code = ''
            state.codeStr = ''
            state.smsBalance = false
        },
        updateCodeStrClear(state) {
            state.codeStr = state.codeStr.substring(0, state.codeStr.length - 1);
        },
        updateBalance(state) {
            state.balance = Math.floor(Math.random() * 9999).toString();
        }
    },

}