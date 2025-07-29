export function getErrorMessage(errorCode: string): string {
   switch (errorCode) {
      case 'email_not_confirmed':
         return 'Please check your email for a confirmation link to login';

      case 'anonymous_provider_disabled':
         return 'Anonymous sign-ins are disabled.';

      case 'bad_code_verifier':
         return 'There was an issue with the login process. Please try again.';

      case 'bad_json':
         return 'Invalid request format. Please try again.';

      case 'bad_jwt':
         return 'Your session has expired. Please log in again.';

      case 'bad_oauth_callback':
         return 'There was an issue with social login. Please try again.';

      case 'bad_oauth_state':
         return 'Social login failed. Please try again.';

      case 'captcha_failed':
         return 'CAPTCHA verification failed. Please try again.';

      case 'conflict':
         return 'A conflict occurred. Please wait a moment and try again.';

      case 'email_address_invalid':
         return 'Please enter a valid email address.';

      case 'email_address_not_authorized':
         return 'This email address is not authorized. Please contact support.';

      case 'email_conflict_identity_not_deletable':
         return 'Cannot remove this login method as it would conflict with another account.';

      case 'email_exists':
         return 'An account with this email already exists.';

      case 'email_provider_disabled':
         return 'Email registration is currently disabled.';

      case 'flow_state_expired':
         return 'Your login session has expired. Please sign in again.';

      case 'flow_state_not_found':
         return 'Login session not found. Please sign in again.';

      case 'hook_payload_invalid_content_type':
         return 'Invalid request format. Please try again.';

      case 'hook_payload_over_size_limit':
         return 'Request too large. Please try again.';

      case 'hook_timeout':
         return 'Request timed out. Please try again.';

      case 'hook_timeout_after_retry':
         return 'Service unavailable. Please try again later.';

      case 'identity_already_exists':
         return 'This account is already linked to another user.';

      case 'identity_not_found':
         return 'Login method not found.';

      case 'insufficient_aal':
         return 'Additional verification required. Please complete multi-factor authentication.';

      case 'invalid_credentials':
         return 'Invalid email or password. Please try again.';

      case 'invite_not_found':
         return 'Invitation expired or already used.';

      case 'manual_linking_disabled':
         return 'Account linking is disabled.';

      case 'mfa_challenge_expired':
         return 'Multi-factor authentication code expired. Please request a new one.';

      case 'mfa_factor_name_conflict':
         return 'A multi-factor authentication method with this name already exists.';

      case 'mfa_factor_not_found':
         return 'Multi-factor authentication method not found.';

      case 'mfa_ip_address_mismatch':
         return 'Please complete multi-factor authentication setup from the same device.';

      case 'mfa_phone_enroll_not_enabled':
         return 'Phone-based multi-factor authentication is not available.';

      case 'mfa_phone_verify_not_enabled':
         return 'Phone verification is not available.';

      case 'mfa_totp_enroll_not_enabled':
         return 'Authenticator app setup is not available.';

      case 'mfa_totp_verify_not_enabled':
         return 'Authenticator app verification is not available.';

      case 'mfa_verification_failed':
         return 'Invalid verification code. Please try again.';

      case 'mfa_verification_rejected':
         return 'Multi-factor authentication verification was rejected.';

      case 'mfa_verified_factor_exists':
         return 'A verified phone number already exists. Please remove it first.';

      case 'mfa_web_authn_enroll_not_enabled':
         return 'Security key setup is not available.';

      case 'mfa_web_authn_verify_not_enabled':
         return 'Security key verification is not available.';

      case 'no_authorization':
         return 'Authorization required. Please log in.';

      case 'not_admin':
         return 'Admin access required.';

      case 'oauth_provider_not_supported':
         return 'This social login provider is not supported.';

      case 'otp_disabled':
         return 'One-time password login is disabled.';

      case 'otp_expired':
         return 'Your verification code has expired. Please request a new one.';

      case 'over_email_send_rate_limit':
         return 'Too many emails sent. Please wait before requesting another.';

      case 'over_request_rate_limit':
         return 'Too many requests. Please wait a few minutes before trying again.';

      case 'over_sms_send_rate_limit':
         return 'Too many SMS messages sent. Please wait before requesting another.';

      case 'phone_exists':
         return 'An account with this phone number already exists.';

      case 'phone_not_confirmed':
         return 'Please verify your phone number before signing in.';

      case 'phone_provider_disabled':
         return 'Phone registration is currently disabled.';

      case 'provider_disabled':
         return 'This login method is currently disabled.';

      case 'provider_email_needs_verification':
         return 'Please check your email for a verification link.';

      case 'reauthentication_needed':
         return 'Please re-enter your password to continue.';

      case 'reauthentication_not_valid':
         return 'Invalid verification code. Please try again.';

      case 'refresh_token_already_used':
         return 'Session expired. Please log in again.';

      case 'refresh_token_not_found':
         return 'Session not found. Please log in again.';

      case 'request_timeout':
         return 'Request timed out. Please try again.';

      case 'same_password':
         return 'New password must be different from your current password.';

      case 'saml_assertion_no_email':
         return 'No email address found in SSO response. Please contact support.';

      case 'saml_assertion_no_user_id':
         return 'No user ID found in SSO response. Please contact support.';

      case 'saml_entity_id_mismatch':
         return 'SSO configuration mismatch. Please contact support.';

      case 'saml_idp_already_exists':
         return 'SSO provider already exists.';

      case 'saml_idp_not_found':
         return 'SSO provider not found.';

      case 'saml_metadata_fetch_failed':
         return 'Failed to configure SSO provider. Please contact support.';

      case 'saml_provider_disabled':
         return 'Enterprise SSO is not enabled.';

      case 'saml_relay_state_expired':
         return 'SSO login expired. Please sign in again.';

      case 'saml_relay_state_not_found':
         return 'SSO login session not found. Please sign in again.';

      case 'session_expired':
         return 'Your session has expired. Please log in again.';

      case 'session_not_found':
         return 'Session not found. Please log in again.';

      case 'signup_disabled':
         return 'Account registration is currently disabled.';

      case 'single_identity_not_deletable':
         return 'Cannot remove your only login method. Please add another method first.';

      case 'sms_send_failed':
         return 'Failed to send SMS. Please try again or use a different method.';

      case 'sso_domain_already_exists':
         return 'SSO domain already registered.';

      case 'sso_provider_not_found':
         return 'SSO provider not found.';

      case 'too_many_enrolled_mfa_factors':
         return 'Maximum number of multi-factor authentication methods reached.';

      case 'unexpected_audience':
         return 'Invalid request. Please try again.';

      case 'unexpected_failure':
         return 'An unexpected error occurred. Please try again.';

      case 'user_already_exists':
         return 'An account with this information already exists.';

      case 'user_banned':
         return 'Your account has been temporarily suspended.';

      case 'user_not_found':
         return 'User not found.';

      case 'user_sso_managed':
         return 'This account is managed by your organization. Please contact your administrator.';

      case 'validation_failed':
         return 'Invalid information provided. Please check your input and try again.';

      case 'weak_password':
         return 'Password is too weak. Please choose a stronger password.';

      default:
         return 'An error occurred. Please try again.';
   }
}
