import './style.css'
import {setup} from './test.js'

document.querySelector('#app').innerHTML = `
<ul id="msglist"></ul>
<input id="msg" name="msg" type="text">
<button id="send"> Send </button>`

setup(document.querySelector('#app'))
