      /*
*DONE=> n1. null -> throw ArgumentNullException
*DONE=> p1. "" -> {}
*DONE=> p4. "024821858" -> {}            
*DONE=> p3. "hola@mundo.com" -> { 'a': 1, 'o': 3, 'u': 1 }
DONE=> p2. "INS-368" -> { 'i': 1 } //el contador sera Case Insensitive, y la salida sera minuscula
*=> px. "Murcielago x MURCIELAGO = mUrciElagO cuadrado" -> { 'a': 5, 'e': 3, 'i': 3, 'o': 4, 'u': 4 }
         */


const VowelsCount = (text) =>{
     return VowelsCountTest(text)
}

function VowelsCountTest(text){
    
    let vowalsarray = Array.from(text);
    let count = 0;
    let elements = /[a,e,i,o,u]/g;
    if (text == null || !text){
        return ('ArgumentNullException');
    }

    if(text == "" || !isNaN(text)){
        return lettercount = " "
    }
    
    for (let index = 0; index < vowalsarray.length; index++) {
        const element = vowalsarray[index];

        
        if (element.toLowerCase().match(elements)) {
            count ++;
        }
        
    }

    return count;
}
console.log(VowelsCount("Murcielago x MURCIELAGO = mUrciElagO cuadrado"))

exports.VowelsCount = VowelsCount;