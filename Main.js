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
    let lettercount = 0;
    var vowals = ["a", "e", "i", "o", "u"]
    if (text == null || !text){
        return ('ArgumentNullException');
    }

    if(text == "" || !isNaN(text)){
        return lettercount = {}
    }

    for (let i of text.toLowerCase()){
        if(vowals.includes(i)){
            lettercount ++;
        }
    }    

    return lettercount;
}

exports.VowelsCount = VowelsCount;