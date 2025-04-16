
        $request.headers["X-Tiny-License-Sign"] = "";
	$request.headers["x-tiny-license-sign"] = "";
delete $request.headers["x-tiny-license-sign"];
        delete $request.headers["X-Tiny-License-Sign"];
      delete $request.headers["deviceID"];
      delete $request.headers["deviceName"];
      delete $request.headers["platform"];
      delete $request.headers["sign"];
        const newBody = JSON.stringify({ }); // Create a new body key: "newValue"
        $request.body = newBody; // Set the new body
if($request.url.includes("v1/licenses/devices")){
const urlWithoutQuery = $request.url.split('?')[0]; // Get the base URL without query parameters
        $request.url = urlWithoutQuery;
}
    $done($request);
