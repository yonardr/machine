import { createStore } from 'vuex'
import {strModule} from "@/store/Buttons";
import {score} from "@/store/score";

export default createStore({
    modules: {
        input: strModule ,
        score: score
    }
})