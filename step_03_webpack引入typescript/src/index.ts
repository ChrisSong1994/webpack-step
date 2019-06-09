import "./asset/style/style";
import "./asset/style/less_style.less"
import "./asset/style/sass_style"
import { join } from 'lodash';

window.onload = () => {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = () => {
        console.log(sayHello('hello typescript!'))
    };
    element.appendChild(btn);
    document.body.appendChild(element)

    function sayHello(key: string) {
        return key
    }
}