import bot from './assets/bot.svg'
import user from './assets/user.svg'

const form = documet.queryselector('form');
const chatContainer = documet.queryselecter('#chat_container');

let loadInterval;

function loader (element){
  element.textcontent = '';

  loadInterval = setInterval(() =>{
    element.textContent += '.';

    if (element.textContext === '....'){
      element.textContent = '';
    }
  }, 300)
}