import Vue from 'vue'
import Vuex from 'vuex'
import {UPDATE_AUTHORIZED_USER, GET_CURRENT_USER, GET_AUTHORIZED_USER, ADD_AUTHORIZED_USER, ADD_CURRENT_USER, DELETE_CURRENT_USER } from './mutation-types';

Vue.use(Vuex)

const state = {
    authorizedUsers: [
        {
            firstName: 'Sairam',
            lastName: 'Svn',
            userName: 'svnsairam',
            email: 'svnsr444@gmail.com',
            password:'1sairam9',
            phone: '+17033403835',
            country: 'India',
            dateOfBirth: "1989-02-12",
          },
          {
            firstName: 'Sarsu',
            lastName: 'Kurra',
            userName: 'kurrasarsu',
            email: 'kurrasarsu@gmail.com',
            password:'1sarsu9',
            phone: '+17033403835',
            country: 'USA',
            dateOfBirth: "1999-12-30",
          },
          {
            firstName: 'Gowtham',
            lastName: 'SV',
            userName: 'svgowtham',
            email: 'svg@gmail.com',
            password:'1gowtham9',
            phone: '+17033403835',
            country: 'India',
            dateOfBirth: "1996-01-14",
          },
          {
            firstName: 'Sree',
            lastName: 'Lakshmi',
            userName: 'shrill',
            email: 'sreelakshmi@gmail.com',
            password:'1shrill9',
            phone: '+17033403835',
            country: 'USA',
            dateOfBirth: "1995-05-17",
          },
    ],
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
    currentLoggedInUser: [],
};
const mutations = {
    [GET_AUTHORIZED_USER](state, authorizedUsers) {
        state.authorizedUsers = authorizedUsers;
    },
    [ADD_AUTHORIZED_USER](state, user) {
        state.authorizedUsers.push(user);
    },
    [ADD_CURRENT_USER](state, user) {
        state.currentLoggedInUser.push(user);
    },
    [DELETE_CURRENT_USER](state, user) {
        // this function eachUser => eachUser.email != user.email
        // loops over eachUser in the currentLoggedInUser array and returns all the users 
        // whose email doesn't match with user.email
        // ... implies shallow cloning of the objects
        // state.currentLoggedInUser = [...state.currentLoggedInUser.filters(eachUser => eachUser.email != user.email)];
        console.log(user);
        state.currentLoggedInUser = [];
    },
    [GET_CURRENT_USER](state, currentUsers) {
        state.currentLoggedInUser = currentUsers;
    },
    [UPDATE_AUTHORIZED_USER](state, user){
        const index = state.authorizedUsers.findIndex(h=>h.userName == user.userName);
        state.authorizedUsers.splice(index,1,user);
        state.authorizedUsers = [...state.authorizedUsers];
    }
};
const actions = {
    getAuthorizedUsersAction({ commit }) {
        // const authorizedUsers = await dataService.getUsers();
        console.log("fasdhkfdk")
        const authorizedUsers = this.$store.state.authorizedUsers;
        commit(GET_AUTHORIZED_USER, authorizedUsers);
    },
    getCurrentUserAction({ commit }) {
        // const authorizedUsers = await dataService.getUsers();
        const currentUsers = [];
        commit(GET_CURRENT_USER, currentUsers);
    },
    addAuthorizedUserAction({ commit }, user) {
        console.log("hi addAuthorizedUserAction");
        commit(ADD_AUTHORIZED_USER, user);
    },
    addCurrentUserAction({ commit }, user) {
        console.log("hi addCurrentUserAction");
        commit(ADD_CURRENT_USER, user);
    },
    deleteCurrentUserAction({ commit }, user) {
        //    const addedUser= await dataService.deleteUser(user);
        commit(DELETE_CURRENT_USER, user);
    },
    updateAuthorizedUserAction({commit},user){
     //    const updatedUser= await dataService.UpdatedUser(user);
        commit(UPDATE_AUTHORIZED_USER,user)
    }
};
const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});
