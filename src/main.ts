import './style.css'


export function lg(info:string,config = [
  "%c Logg %c info %c",
  "background:#444444 ; padding: 1px; border-radius: 3px 0 0 3px; color: #fff",
  "background:#0099CC; padding: 1px; border-radius: 0 3px 3px 0; color: #fff",
  "background:transparent",
]) {
  console.log(...[...config,info]);
  return config
}


lg('logg')



const pulser = document.getElementById('pulser')!
const logoInfo = document.getElementById('logoInfo')!

pulser.addEventListener('click',() => {
  const config = lg('log')
  setLog(config)
})

function setLog(info:string) {
  const logMsg = createInfo('info')
  logoInfo.appendChild(logMsg)
}

function createInfo(type: 'info'| 'warnning') {
  const info = document.createElement('div')
  info.setAttribute('flex','true')

  const info1 = document.createElement('div')
  info1.setAttribute('Logg','true')

  const info2 = document.createElement('div')
  info1.innerText = 'Logg'
  info2.innerText = type
  info2.setAttribute(type,'true')
  info.append(info1,info2)
  return info
}