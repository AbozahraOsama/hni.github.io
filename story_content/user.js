function ExecuteScript(strId) {
    switch (strId) {
        case "6ZpdF6EPBS2":
            Script1();
            break;
    }
}

function Script1() {
    const player = GetPlayer();
    const x = player.GetVar("myname");
    //write your code here ya osos
    updateUserScore().then(_ => console.log);
}

window.addEventListener('message', (message) => {
    if (message.data.type === 'FIREBASE_USER_ID') {
        window.globals.UserFirebaseId = message.data.userId;
    }
});

/**/
const apiUrl = 'https://firestore.googleapis.com/v1/projects/hniapp/databases/(default)/documents/messages';
let data, count = 1;

async function updateUserScore() {
    data = {"fields": {"title": {"stringValue": 'this is count num. ' + count++}}};
    const rawPatchResponse = await fetch(`${apiUrl}/${window.globals.UserFirebaseId}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
    });
    return await rawPatchResponse.json();
}

async function postUserScore() {
    data = {"fields": {"title": {"stringValue": count++}}};
    const rawPostResponse = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return await rawPostResponse.json();
}

