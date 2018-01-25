import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import QuizQuestion from '@/components/QuizQuestion'
import Form from '@/components/Form'


Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: {
                name: "form"
            }
        },

        {
            path: '/',
            name: 'form',
            component: Form

        },
        {
             path: '/quiz',
             name: 'QuizQuestion',
             component: QuizQuestion

         }


    ]
})
