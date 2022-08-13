import product1 from '@/assets/images/product-1.png';
import product2 from '@/assets/images/product-2.png';

export default {
    state: {
        nav: [
            {name: 'Омега-3', link: '/#', isActive: false},
            {name: 'Вітаміни', link: '/#', isActive: false},
            {name: 'Добавки', link: '/#', isActive: false},
            {name: 'Доставка', link: '/#', isActive: false},
            {name: 'Про нас', link: '/#', isActive: false},
        ],
        popularSearches: ['Колаген', 'Омега-3', 'Вітамін Д3', 'Сквален', 'Вітаміни для дітей'],
        popularInCategory: [
            {name: 'Колаген', description: 'Пептиди 1-типу із Франції', amount: '30 порцій у стіках', image: `${product1}`},
            {name: 'Вітамін D3 2000 ME', description: 'Пептиди 1-типу із Франції', amount: '60 капсул', image: `${product2}`},
            {name: 'Омега-3 Тріска', description: 'Пептиди 1-типу із Франції', amount: '120 капсул', image: `${product1}`},
            {name: 'Омега-3 Тунець', description: 'Пептиди 1-типу із Франції', amount: '120 капсул', image: `${product2}`}
        ],
        forOld: ['Всі', 'Колаген', 'Омега-3 Тунець', 'Омега-3 Тріска', 'Вітамін D3 2000 ME', 'Вітамін D3 5000 ME', 'Сквален', 'Акулячий жир'],
        forChildren: ['Всі', 'Kids Омега-3  Тунець', 'Kids Омега-3  Тріска', 'Kids Вітамін Д3']
    },
    getters: {
        getNav: state => state.nav,
        getPopularSearches: state => state.popularSearches,
        getPopularInCategory: state => state.popularInCategory,
        getForOld: state => state.forOld,
        getForChildren: state => state.forChildren
    },
    mutations: {
        toggleActive(state, index) {
            state.nav[index].isActive = !state.nav[index].isActive
        }
    }
}