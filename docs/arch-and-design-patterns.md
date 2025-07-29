# Articheture and Design Patterns

## Auth Provider - DONE ✅

The auth provider is a custom hook and context that handles the authentication state of the user. It is used to store the user's authentication state and provide a way to access it throughout the application. This is done by wrapping the auth provider in \_app.tsx and using the useAuth hook in the app.

Flow
user logs in -> client request to supabase -> auth service handles response -> response is used in context and hook - >hook is used in the app

## Plant Care State - IN PROGRESS ⏳

useCallback? or useReducer? Research this. // TODO:

Create a custom hook that handles the plants condition, adds to the plant db

You can either hook up the plant to the moisure level sensor or manually use the last waterred date and set the next watering date dependant on the plant type.

Use these date to create a notification service that will send a notification to the user when the plant needs to be watered.

Also use theses dates to create a calendaer the user can use to see when and what the plant needs to be watered.

## Notification Service - IN PROGRESS ⏳

Create a SNS topic to send notifications to the user.
Start off with email notifications.
Use the plant care state to send notifications to the user when the plant needs to be watered.
Use the plant care state to create a calendar the user can use to see when and what the plant needs to be watered.

## Future thinking

If I was to scale this app to handle 1M users I would have to balance

-cost
-scalability
-performance
-security

Supabase provides a lot of the backend services however this would come at a heavy cost.

If I was to build the backend myseld I would:

-  Aurora rds serverless (not container based like ecs so I can balance the cost onnly pay for what db calls I use)
-  API Gateway (i would have aws lamdas that handle the functionality for each endpoint and api gateway handles the routing and sets up a rest endpoint)
-  S3 for image storage (cheap)
-  Cloudflare CDN cache the plant images
-  Authentication I would use AWS Cognito?? reseach this (apparently it's a good fit for this use case)
-  Logging for dashboards (?? whats a cheap NewRelic alternative?)

Frontend (Next.js)
↓ (authenticated requests)
CloudFlare CDN
↓
API Gateway (with Cognito Authorizer)
↓
Lambda Functions (with user context)
↓
Aurora Serverless (user data)
↓
S3 (plant images)
