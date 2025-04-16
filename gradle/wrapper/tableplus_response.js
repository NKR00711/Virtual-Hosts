if($request.url.includes("v1/licenses/register")){
  $response.status = 200;
  const newBody = JSON.stringify({
    "Data": {
    "sign": "12345678901234567890123456789012345678901234567890",
    "email": "NKR@Over.Lord",  // Replace with the actual email address
    "deviceID": "1b1b5db57a96712d659770b16be56a93",//Example
    "licenseKey": "",
    "purchasedAt": "2025-04-14",
    "nextChargeAt": 9999,
    "updatesAvailableUntil": "3024-04-14"
  },
  "Code": 200,
  "Message": "Ok"
  });
  $response.body = newBody;
} else if($request.url.includes("v1/apps/osx/tableplus")){
  $response.status = 200;
  var body = $response.body;
  var obj = JSON.parse(body);
  obj["Data"]["DayBeforeExpiration"] = 9999;
  obj["Data"]["LicenseKey"] = "";
  $response.body = JSON.stringify(obj);
} else if($request.url.includes("v1/licenses/devices")){
  $response.status = 200;
  const newBody = JSON.stringify({
    "Message": "Ok",  // This field is commented out in the original code
    "Data": {
        "DeviceID": "1b1b5db57a96712d659770b16be56a93",//Example
        "UpdatesAvailableUntilString": "3024-04-14",
      "updatesAvailableUntil": "3024-04-14"
    },
    "Code": 200
  });
  $response.body = newBody;
}
$done($response);
