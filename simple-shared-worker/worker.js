const ports = new Set()

setInterval(() => {
  const date = new Date()
  for(let port of ports){
    
    port.postMessage(`${date.toUTCString()} ;${ports.size}`)
  }
},1000)


onconnect = function(e) {
  const port = e.ports[0]
  ports.add(port)

  port.onmessage = (e) => {
    
    if(e.data === 'close'){
      ports.delete(port)
    }
  }
}
