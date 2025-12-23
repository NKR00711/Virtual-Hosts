/*************************************

Project name: Duolingo Max
Download address: https://t.me/FreeIDMZoneC
Update date: 2025-12-23
Script author: NKR
Telegram channel: https://t.cn/FreeIDMZoneC
Usage statement: ⚠️For reference only, 🈲Reprint and sale!

**************************************

[rewrite_local]
^https?:\/\/([a-z0-9-]+\.)?duolingo\.com\/[^\/]+\/batch$ url script-response-body https://raw.githubusercontent.com/NKR00711/Virtual-Hosts/refs/heads/master/gradle/wrapper/duolingo.js

[mitm]
hostname = *.duolingo.com

*************************************/
/*
 * Duolingo Unlocker Script
 * This is an http-response script. Add it with: requires-body=true
 */

const xp_boost = true; // 获取加倍经验buff
const xp_multiplier = 3; // 经验倍率
const enable_beta = true; // 启用beta版功能

console.log('url: ' + $request.url);

let body = $response.body;

if (typeof body !== 'string' || body === '') {
    $done({});
}

let obj;
try {
    obj = JSON.parse(body);
} catch (e) {
    console.log('Failed to parse response body as JSON');
    $done({});
}

if ('etag' in obj.responses[0].headers) {
    console.log('not the data');
    $done({});
}

const userdata = JSON.parse(obj.responses[0].body);
const shopdata = JSON.parse(obj.responses[1].body);
const timestamp = Math.floor(Date.now() / 1000);

console.log('time: ' + timestamp);
console.log('id: ' + userdata.id);
console.log('modifying data');
console.log('set subscription');

try {
    let id;
    for (let i = 0; i < shopdata.shopItems.length; i++) {
        if (shopdata.shopItems[i].id === 'gold_subscription_twelve_month') {
            console.log('item id: ' + i);
            id = i;
            break;
        }
    }
    if (id === undefined) {
        throw new Error('subscription id not found');
    }

    let found = false;
    for (let i = 0; i < userdata.shopItems.length; i++) {
        if (userdata.shopItems[i].id === 'gold_subscription') {
            console.log('subscription found');
            userdata.shopItems[i].purchaseDate = timestamp - 172800;
            userdata.shopItems[i].subscriptionInfo.expectedExpiration = timestamp + 31363200;
            userdata.shopItems[i].subscriptionInfo.productId = shopdata.shopItems[id].productId;
            userdata.shopItems[i].subscriptionInfo.tier = 'twelve_month';
            userdata.shopItems[i].subscriptionInfo.type = 'gold';
            userdata.shopItems[i].subscriptionInfo.renewing = true;
            found = true;
            break;
        }
    }

    if (!found) {
        console.log('add subscription');
        userdata.shopItems.push({
            id: 'gold_subscription',
            purchaseDate: timestamp - 172800,
            purchasePrice: 11999,
            subscriptionInfo: {
                expectedExpiration: timestamp + 31363200,
                productId: shopdata.shopItems[id].productId,
                renewer: 'APPLE',
                renewing: true,
                tier: 'twelve_month',
                type: 'gold'
            },
            familyPlanInfo: {
                ownerId: userdata.id,
                secondaryMembers: []
            }
        });
    }

    userdata.subscriptionConfigs[0] = {
        pauseStart: timestamp + 31363200,
        pauseEnd: null,
        productId: 'com.duolingo.immersive_family_subscription',
        receiptSource: 1,
        expirationTimestamp: (timestamp + 31363200) * 1000,
        itemType: 'immersive_subscription'
    };
} catch (e) {
    console.log(e);
    console.log('failed to set subscription');
}

if (xp_boost) {
    console.log('set xp boost');
    let found = false;
    for (let i = 0; i < userdata.shopItems.length; i++) {
        if (userdata.shopItems[i].id === 'xp_boost_stackable') {
            console.log('xp boost found');
            userdata.shopItems[i].purchaseDate = timestamp;
            userdata.shopItems[i].expectedExpirationDate = timestamp + 3600;
            userdata.shopItems[i].xpBoostMultiplier = xp_multiplier;
            found = true;
            break;
        }
    }
    if (!found) {
        console.log('add xp boost');
        userdata.shopItems.push({
            id: 'xp_boost_stackable',
            purchaseDate: timestamp,
            expectedExpirationDate: timestamp + 3600,
            purchasePrice: 0,
            xpBoostMultiplier: xp_multiplier
        });
    }
}

if (enable_beta) {
    console.log('enable beta feature');
    userdata.betaStatus = 'ELIGIBLE';
    userdata.trackingProperties.beta_enrollment_status = 'ELIGIBLE';
}

console.log('set subscribe level');
userdata.subscriberLevel = 'GOLD';
userdata.trackingProperties.has_item_live_subscription = true;
userdata.trackingProperties.has_item_gold_subscription = true;

console.log('set timer boost');
userdata.timerBoostConfig.hasFreeTimerBoost = true;
userdata.timerBoostConfig.timePerBoost = 3600;
userdata.timerBoostConfig.hasPurchasedTimerBoost = true;

console.log('set unlimited heart');
if ('health' in userdata) {
    userdata.health.unlimitedHeartsAvailable = true;
    userdata.health.eligibleForFreeRefill = true;
} else {
    console.log('health config not found');
}

console.log('set energy');
userdata.energyConfig.energy = userdata.energyConfig.maxEnergy;

console.log('misc setups');
userdata.shouldPreventMonetizationForSchoolsUser = false;
userdata.pushFamilyPlanNudge = true;

obj.responses[0].body = JSON.stringify(userdata);
obj.responses[1].body = JSON.stringify(shopdata);

const newBody = JSON.stringify(obj);

$done({ body: newBody });
