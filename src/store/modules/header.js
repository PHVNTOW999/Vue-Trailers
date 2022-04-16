import router from '@/router/index.js'

export default ({
    state: {
        randomTrailer: "/TrailerPage/",
        randomID: 0,
        searchValue: "",
    },
    mutations: {
    },
    actions: {
        getRandomTrailer ({ state, getters }) {
            return state.randomTrailer = "/TrailerPage/" + getters.RANDOM_ID
        },
        pushSearchTrailer({ state }) {
            router.push({ name: 'SearchPage',  params: {searchValue: state.searchValue || 'empty'} })
            state.searchValue = ""
        },
    },
    getters: {
        RANDOM_TRAILER(state) {
            return state.randomTrailer
        },
        RANDOM_ID(state, rootGetters) {
            return state.randomID = Math.floor(Math.random() * rootGetters.TRAILERS.length) + 0; 
        },
        SEARCH_VALUE(state) {
            return state.searchValue
        }
    },
})