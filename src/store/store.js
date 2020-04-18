import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    users: [],
    activities: [
        {
            id: 1,
            activityName: "Yoga",
            activityDescription:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 2,
            activityName: "Dance",
            activityDescription:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 3,
            activityName: "Gym",
            activityDescription:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 4,
            activityName: "Swimming",
            activityDescription:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 5,
            activityName: "Cycling",
            activityDescription:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 6,
            activityName: "Boxing",
            activityDescription:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 7,
            activityName: "Football",
            activityDescription:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        }
    ],
    activityDetails: [
        {
            id: 1,
            activityName: "Yoga",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png",
            dailyPlans: "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm."
        },
        {
            id: 2,
            activityName: "Dance",
            dailyPlans:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 3,
            activityName: "Gym",
            dailyPlans:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 4,
            activityName: "Swimming",
            activityDescription:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 5,
            activityName: "Cycling",
            dailyPlans:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 6,
            activityName: "Boxing",
            dailyPlans:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        },
        {
            id: 7,
            activityName: "Football",
            dailyPlans:
                "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
            activityImage: "https://bulma.io/images/placeholders/1280x960.png"
        }
    ],
};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});
