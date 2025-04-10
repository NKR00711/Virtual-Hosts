/*************************************

Project name: Infuse Trakt
Download address: https://t.me/FreeIDMZoneC
Update date: 2025-04-10
Script author: NKR
Telegram channel: https://t.cn/FreeIDMZoneC
Usage statement: ⚠️For reference only, 🈲Reprint and sale!

**************************************

[rewrite_local]
^https:\/\/api\.trakt\.tv\/storage url script-response-body https://raw.githubusercontent.com/NKR00711/Virtual-Hosts/refs/heads/master/gradle/wrapper/trakt_infuse.js

[mitm]
hostname = api.trakt.tv

*************************************/
var ddm = JSON.parse($response.body);

ddm=[{"key":"iapStatus_v2","value":"Ll/Dvdw/dCzWZev836yv+EYl+ayZXl8Rndw75KjLgpEqXwYAU6iwmR0XgB4lhhZDLzMIDHKjf5GrB/camzGfJk40o05Zod9M/08VW/SPucmMCbHf0PlezL+iwwbCJZY0xZwMoAw+fUougNUcb0TYGXXZc8+Lh7u5oVvlDvqLESe22mLi066CRFqOqwr0YtP+lp52SDqC7TxjSFdcKfO8Hw==","created_at":"3025-03-10T08:19:05.000Z","updated_at":"3025-03-10T14:19:52.000Z"}];
console.log("JSON Data:", JSON.stringify(ddm, null, 2));

$done({body : JSON.stringify(ddm)});

// $done({body : '[{"key":"iapStatus_v2","value":"Ll/Dvdw/dCzWZev836yv+EYl+ayZXl8Rndw75KjLgpEqXwYAU6iwmR0XgB4lhhZDLzMIDHKjf5GrB/camzGfJk40o05Zod9M/08VW/SPucmMCbHf0PlezL+iwwbCJZY0xZwMoAw+fUougNUcb0TYGXXZc8+Lh7u5oVvlDvqLESe22mLi066CRFqOqwr0YtP+lp52SDqC7TxjSFdcKfO8Hw==","created_at":"3025-03-10T08:19:05.000Z","updated_at":"3025-03-10T14:19:52.000Z"}]'});
