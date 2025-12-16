let response = $response;

// Check if the response body exists
if (response && response.body) {
    var body = JSON.parse(response.body);

    // Modify the body with the provided values
    body["has_active_subscription"] = true;
    body["has_pro_features"] = true;
    body["has_better_ai"] = true;
    body["publishing_bot"] = true;
    body["can_upgrade_to_pro"] = false;
    body["admin"] = true;
    body["eligible_for_cloud_sync"] = true;
    body["eligible_for_ai_beta_features"] = true;
    body["eligible_for_bext"] = true;
    body["eligible_for_file_search_beta"] = true;
    body["eligible_for_application_settings"] = true;
    body["eligible_for_raycast_notes_beta"] = true;
    body["eligible_for_ai"] = true;
    body["credits"] = 27163887;
    body["can_use_referral_codes"] = true;
    body["has_running_subscription"] = true;

    // Convert back to JSON string
    response.body = JSON.stringify(body);
}

// Set the modified response
$done(response);
