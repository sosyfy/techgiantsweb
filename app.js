import channelSection from './screens/channels.js';

// navbar
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
close.addEventListener('click', function(){
    nav.classList.remove('active')
})
// /ends//

// /channels render
const channelsContainer = document.getElementById('channels-container')
channelsContainer.innerHTML = channelSection.render();
// channels render end

// aos animations
AOS.init();
// aos end
//