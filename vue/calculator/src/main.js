import Vue from 'vue'
import App from './App'

// new Vue({ //instancia do vue
//     el: '#app',
//     render(createElement){
//         return createElement(App)
//     }
// })

new Vue({ //instancia do vue  
    render: h => h(App)
}).$mount("#app");