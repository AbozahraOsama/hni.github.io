function ExecuteScript(strId) {
    switch (strId) {
        case "6ZpdF6EPBS2":
            Script1();
            break;
    }
}

function Script1() {
    var player = GetPlayer();
    var x = player.GetVar("myname");
//write your code here ya osos
    console.log('Trying to access the parent document form the iframe');
    console.log(window);
    console.log(window.parent);
    window.parent.postMessage('text message form iframe to parent window','*');
}

