/*************************************

Project name: Infuse Trakt
Download address: https://t.me/FreeIDMZoneC
Update date: 2025-04-11
Script author: NKR
Telegram channel: https://t.cn/FreeIDMZoneC
Usage statement: ⚠️For reference only, 🈲Reprint and sale!

**************************************

[rewrite_local]
^https:\/\/api\.trakt\.tv\/storage url script-response-body https://raw.githubusercontent.com/NKR00711/Virtual-Hosts/refs/heads/master/gradle/wrapper/trakt_infuse_NKR.js

[mitm]
hostname = api.trakt.tv

*************************************/
var body = $response.body;
var obj = JSON.parse(body); // Parse the JSON string into an object

var newItem = {
    "key": "iapStatus_v2",
    "value": "kar5PfIUS7FpIoOBKZWmu91VxvWfFj4kYKWSBCupHEN921FanmL3RCvTNX86WwwX5AtjVfccYX8U1jrqGVx7FCxt331VHWsu2QUACy/S6Oswkb6C7S5NgVG+g4/zuJV7so256kmY0PwlXMF7tbkjx4UrX/SYlZDll7cofLfzg0CNZ92gDpA5ZPbpw3ccSoDWlD/hkpvC73hzmXR9BDTjN4C4PGc9dbyYIgVSFEil738=",
    "created_at": "2025-03-10T08:19:05.000Z",
    "updated_at": "3025-03-10T14:19:52.000Z"
};

var index = obj.findIndex(item => item.key === newItem.key);

if (index !== -1) {
    obj[index] = newItem;
} else {
    obj.push(newItem);
}

body = JSON.stringify(obj);
$done({ body: body });

// var body = $response.body;
// var obj = JSON.parse(body);

// obj = [{"key":"iapStatus_v2","value":"G5T3ZMnyYuNjUE6ZzTro37R7JgUJqlFS95sh6aDhiUL3MSzot4kngLFStzdazrHE1Q4+CgAEM6gFMIi9iaW5m8dXCj7dY78dCJJuMMFGDJUtFqXDMiotkO4ox3U2P/aFVUz2qTUxFA7tReQNci9Habx0398/dok/AoqGTauuYlFUcIIrFtJfVAS6BlB8OxvYjrJ83bzf47/TiPvzaDR5wQ==","created_at":"3025-03-10T08:19:05.000Z","updated_at":"3025-03-10T14:19:52.000Z"}]

// body = JSON.stringify(obj);
// $done({ body: body });

// var ddm = JSON.parse($response.body);

// ddm=[{"key":"iapStatus_v2","value":"Ll/Dvdw/dCzWZev836yv+EYl+ayZXl8Rndw75KjLgpEqXwYAU6iwmR0XgB4lhhZDLzMIDHKjf5GrB/camzGfJk40o05Zod9M/08VW/SPucmMCbHf0PlezL+iwwbCJZY0xZwMoAw+fUougNUcb0TYGXXZc8+Lh7u5oVvlDvqLESe22mLi066CRFqOqwr0YtP+lp52SDqC7TxjSFdcKfO8Hw==","created_at":"3025-03-10T08:19:05.000Z","updated_at":"3025-03-10T14:19:52.000Z"}];

// $done({body : JSON.stringify(ddm)});

// $done({body : '[{"key":"iapStatus_v2","value":"Ll/Dvdw/dCzWZev836yv+EYl+ayZXl8Rndw75KjLgpEqXwYAU6iwmR0XgB4lhhZDLzMIDHKjf5GrB/camzGfJk40o05Zod9M/08VW/SPucmMCbHf0PlezL+iwwbCJZY0xZwMoAw+fUougNUcb0TYGXXZc8+Lh7u5oVvlDvqLESe22mLi066CRFqOqwr0YtP+lp52SDqC7TxjSFdcKfO8Hw==","created_at":"3025-03-10T08:19:05.000Z","updated_at":"3025-03-10T14:19:52.000Z"}]'});
