//The key is simply an offset
//needs to account for uppercase

function encryptCaesar(messageIn, key){
    let messageOut='';
    let len = messageIn.length;
    let k = 0;
    while(k<len){
        if(messageIn[k] != ' '){
            let mapNum = messageIn.charCodeAt(k)+key
            messageOut += `${String.fromCharCode(mapNum)}`
        } else{
            messageOut += ' '
        }
        k++
    }
    return messageOut;
}

function decryptCaesar(messageIn, key){
    let messageOut='';
    let len = messageIn.length;
    let k = 0;
    while(k<len){
        if(message[k] != ' '){
            let mapNum = messageIn.charCodeAt(k)-key
            messageOut += `${String.fromCharCode(mapNum)}`
        } else{
            messageOut += ' '
        }
        k++
    }
    return messageOut;
}

function initiate(callback, arg1, arg2){
    return callback(arg1, arg2)
}

//console.log(encryptCaesar('hello', 1))

//The coolest function
console.log(initiate(eval(process.argv[2]), process.argv[3], parseInt(process.argv[4])))