/*************************************

Project name: Infuse Trakt
Download address: https://t.me/FreeIDMZoneC
Update date: 2025-04-10
Script author: NKR
Telegram channel: https://t.cn/FreeIDMZoneC
Usage statement: ⚠️For reference only, 🈲Reprint and sale!

**************************************

[rewrite_local]
^https:\/\/api\.trakt\.tv\/users\/settings url script-response-body https://raw.githubusercontent.com/NKR00711/Virtual-Hosts/refs/heads/master/gradle/wrapper/trakt_infuse_FreeIDMZone.js

[mitm]
hostname = api.trakt.tv

*************************************/
// Get the response body
var body = $response.body;

// Parse the JSON string into an object
var obj = JSON.parse(body);

// Modify the object as needed
obj = {
    "subscription": {
        "status": "active", // Change subscription status to active
        "expiry": "2099-12-31T23:59:59Z", // Set a far future expiry date
        "plan": "premium" // Set the plan to premium
    }
};

// Convert the modified object back to a JSON string
body = JSON.stringify(obj);

// Return the modified body
$done({ body: body });

var body = $response.body;
var obj = JSON.parse(body);

obj["vip"] = true;

obj["user"] = obj["user"] || {}; // Ensure the user object exists
obj["user"]["vip_og"] = true;
obj["user"]["vip_years"] = 99999;
obj["user"]["username"] = "NKR🇮🇳";
obj["user"]["name"] = "NKR🇮🇳";
obj["user"]["vip"] = true;

obj["limits"] = obj["limits"] || {};
obj["limits"]["list"]["item_count"] = 9999999;
obj["limits"]["watchlist"]["item_count"] = 9999999;
obj["limits"]["favorites"]["item_count"] = 9999999;
obj["limits"]["collection"]["item_count"] = 9999999;
obj["limits"]["notes"]["item_count"] = 9999999;
obj["limits"]["recommendations"]["item_count"] = 9999999;

body = JSON.stringify(obj);
$done({ body: body });

// var ddm = JSON.parse($response.body);

// ddm=[{"key":"iapStatus_v2","value":"Ll/Dvdw/dCzWZev836yv+EYl+ayZXl8Rndw75KjLgpEqXwYAU6iwmR0XgB4lhhZDLzMIDHKjf5GrB/camzGfJk40o05Zod9M/08VW/SPucmMCbHf0PlezL+iwwbCJZY0xZwMoAw+fUougNUcb0TYGXXZc8+Lh7u5oVvlDvqLESe22mLi066CRFqOqwr0YtP+lp52SDqC7TxjSFdcKfO8Hw==","created_at":"3025-03-10T08:19:05.000Z","updated_at":"3025-03-10T14:19:52.000Z"}];

// $done({body : JSON.stringify(ddm)});

// $done({body : '[{"key":"iapStatus_v2","value":"Ll/Dvdw/dCzWZev836yv+EYl+ayZXl8Rndw75KjLgpEqXwYAU6iwmR0XgB4lhhZDLzMIDHKjf5GrB/camzGfJk40o05Zod9M/08VW/SPucmMCbHf0PlezL+iwwbCJZY0xZwMoAw+fUougNUcb0TYGXXZc8+Lh7u5oVvlDvqLESe22mLi066CRFqOqwr0YtP+lp52SDqC7TxjSFdcKfO8Hw==","created_at":"3025-03-10T08:19:05.000Z","updated_at":"3025-03-10T14:19:52.000Z"}]'});
