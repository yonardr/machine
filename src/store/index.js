import { createStore } from 'vuex'
import {strModule} from "@/store/Buttons";
import {score} from "@/store/score";
import {phoneModule} from "@/store/phone";

export default createStore({
    modules: {
        input: strModule ,
        score: score,
        phone: phoneModule
    }
})