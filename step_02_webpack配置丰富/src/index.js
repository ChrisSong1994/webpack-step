import "./asset/style/style";
import "./asset/style/less_style.less"
import "./asset/style/sass_style"
import _ from 'lodash';

window.onload=()=>{
    let element = document.createElement('div');
    let btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = ()=>{
        console.log('Hello webpack!')
    };
    element.appendChild(btn);
    document.body.appendChild(element)
}