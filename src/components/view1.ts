import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./view1.html');
})

export class View1 extends Vue {
    // dataメンバー =======================
    message: string = "Hello Vue!";

    // methodsメンバー =======================
    reverseMessage() : void {
        this.message = this.message.split('').reverse().join('');
    }
}