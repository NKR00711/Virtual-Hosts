if ($request.url.includes("https://tableplus.com/v1/apps/osx/tableplus") || $request.url.includes("https://tableplus.com/v1/licenses/register") || $request.url.includes("https://tableplus.com/v1/licenses/devices") || $request.url.includes("https://tableplus.com/v1/licenses/devices") || $request.url.includes("https://tableplus.com/osx/version.xml")) {
        // Modify the request headers
        $request.headers["X-Tiny-License-Sign"] = "";
        delete $request.headers["X-Tiny-License-Sign"];
      delete $request.headers["deviceID"];
      delete $request.headers["deviceName"];
      delete $request.headers["platform"];
      delete $request.headers["sign"];
        const newBody = JSON.stringify({ }); // Create a new body key: "newValue"
        $request.body = newBody; // Set the new body
    }
