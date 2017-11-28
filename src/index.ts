import Vue from 'vue'
import { View1 } from './components/view1'

// コンポーネントをグローバルに登録
Vue.component('view-1', View1);

// ルートVueインスタンス
class App extends Vue {
    msg = 'there'
}
new App().$mount('#app'); //index.htmlのエントリーポイントをマウントする