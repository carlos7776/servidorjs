// crear servidor con javascript
// primero se debe escojer el protocolo red
const http = require("http");
// despues se entrega el REG Q ES la consulta que aroja el sitio web y despues el RES q es le q entrega la reouesta del sitio web
function sitioweb(reg, res)
 {
    // aca se coloca 200 q se conecto correcta mente y lo q va a leer este caso html
    res.writeHead(200, {"content-type": "text/html"} );
    // entrega lo que se va a mostrar en la web
    res.end("Mi <strong>primer</strong> servidor")
 }
//  aca crear el servidor para sitioweb
let servidor = http.createServer(sitioweb);
// aca se escoje el puerto de ingreso y la ip q se desea TANTO  local 127.0.0.1 o la que da el modem para q cualquiera en el router pueda ACCERDER este caso es la que da el router por ipconfig en cmd
servidor.listen(6969, "192.168.0.17");
//aca da un mensaje de aprovacion de que ya se encuentra corriendo 
console.log("servidor corriendo en el puerto 6969")