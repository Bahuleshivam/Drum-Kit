const a = new Audio('./sounds/clap.wav')
const s = new Audio('./sounds/hihat.wav')
const d = new Audio("./sounds/kick.wav")
const f = new Audio("./sounds/openhat.wav")
const g = new Audio("./sounds/boom.wav")
const h = new Audio("./sounds/ride.wav")
const j = new Audio("./sounds/snare.wav")
const k = new Audio("./sounds/tom.wav")
const l = new Audio("./sounds/tink.wav")
const aa = document.getElementById('aa')
const ss = document.getElementById('ss')
const dd = document.getElementById('dd')
const ff = document.getElementById('ff')
const gg = document.getElementById('gg')
const hh = document.getElementById('hh')
const jj = document.getElementById('jj')
const kk = document.getElementById('kk')
const ll = document.getElementById('ll')



window.addEventListener('keydown', (e)=>{

    

    if(e.keyCode == 65 ){
        aa.classList.add('playing')
        setTimeout(() => {
            aa.classList.remove('playing')
        }, 300);
        a.currentTime = 0
        a.play()
    }
    else if(e.keyCode == 83){
        ss.classList.add('playing')
        setTimeout(() => {
            ss.classList.remove('playing')
        }, 300);
        s.currentTime = 0
        s.play()
    }
    else if(e.keyCode == 68){
        dd.classList.add('playing')
        setTimeout(() => {
            dd.classList.remove('playing')
        }, 300);
        d.currentTime = 0
        d.play()
    }
    else if(e.keyCode == 70){
        ff.classList.add('playing')
        setTimeout(() => {
            ff.classList.remove('playing')
        }, 300);
        f.currentTime = 0
        f.play()
    }
    else if(e.keyCode == 71){
        gg.classList.add('playing')
        setTimeout(() => {
            gg.classList.remove('playing')
        }, 300);
        g.currentTime = 0
        g.play()
    }
    else if(e.keyCode == 72){
        hh.classList.add('playing')
        setTimeout(() => {
            hh.classList.remove('playing')
        }, 300);
        h.currentTime = 0
        h.play()
    }
    else if(e.keyCode == 74){
        jj.classList.add('playing')
        setTimeout(() => {
            jj.classList.remove('playing')
        }, 300);
        j.currentTime = 0
        j.play()
    }
    else if(e.keyCode == 75){
        kk.classList.add('playing')
        setTimeout(() => {
            kk.classList.remove('playing')
        }, 300);
        k.currentTime = 0
        k.play()
    }
    else if(e.keyCode == 76){
        ll.classList.add('playing')
        setTimeout(() => {
            ll.classList.remove('playing')
        }, 300);
        l.currentTime = 0
        l.play()
    }

})