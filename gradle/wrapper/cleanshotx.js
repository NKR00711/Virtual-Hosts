if($request.url.includes("v1/user")){
  $response.status = 200;
  const body = destr($response.body) as any
  if (body?.data?.user?.storage) {
    const storage = body.data.user.storage
    storage.limit_bytes = 21073741824 // 20GB
    storage.limit_readable = '20GB'
    const team = body.data.user.team
    team.billing_plan.name = 'pro'
    team.billing_plan.is_paid = true
    team.billing_plan.readable_name = 'Pro'
    team.billing_plan.abilities.can_upload_original_media = true
    team.billing_plan.abilities.can_copy_direct_link = true
    team.billing_plan.abilities.can_set_expire_after = true
    team.billing_plan.abilities.can_set_media_password = true
    body.data.user.email_verified = true
    body.data.user.updated_at = '2099-01-11T11:36:16.000000Z'
  }
  $response.body = body;
} else if($request.url.includes("v1/license/activate")){
  $response.status = 200;
  const body = destr($response.body) as any
  const newBody = JSON.stringify({
    "nonce": body.nonce,
    "valid": true
  });
  $response.body = newBody;
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
