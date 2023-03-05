export default {

    name: 'daybook',
    path: '/daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
        name: 'no-entry',
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
]
}