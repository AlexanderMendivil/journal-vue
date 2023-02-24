export default {

    name: 'daybook',
    path: '/daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: []
}