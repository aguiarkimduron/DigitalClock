const digitalClock = document.querySelector('.clock')
const tick = () => {
    const now = new Date()
    let sec = now.getSeconds()+""
    if(sec.length === 1) sec = '0'+now.getSeconds()
    digitalClock.textContent = `${now.getHours()} : ${now.getMinutes()} : ${sec}`
}

const tickInterval = setInterval(() => {
    tick()
},1000)

