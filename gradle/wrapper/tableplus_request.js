$request.headers["X-Tiny-License-Sign"] = "";
        delete $request.headers["X-Tiny-License-Sign"];
      delete $request.headers["deviceID"];
      delete $request.headers["deviceName"];
      delete $request.headers["platform"];
      delete $request.headers["sign"];
        const newBody = JSON.stringify({ }); // Create a new body key: "newValue"
        $request.body = newBody; // Set the new body
    $done($request);
