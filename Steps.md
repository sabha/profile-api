### Testing in Local

Testing arts create lambda.

```
serverless invoke local --function create --path mocks/create-event.json
serverless invoke local --function get --path mocks/get-event.json
serverless invoke local --function list --path mocks/list-event.json
serverless invoke local --function update --path mocks/update-event.json
serverless invoke local --function delete --path mocks/delete-event.json
```

### Cognito user pool and app client Setup

```
aws cognito-idp sign-up --region us-east-1 --client-id 2evou4sgn9a3ga9ekvdhbonndh --username admin@example.com --password Pass4321!
aws cognito-idp  admin-confirm-sign-up --region us-east-1 --user-pool-id us-east-1_JfM8LcEYy --username admin@example.com
```

### Testing Secured AIP (Auth is enabled)

npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Pass4321!' \
--user-pool-id='us-east-1_JfM8LcEYy' \
--app-client-id='2evou4sgn9a3ga9ekvdhbonndh' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:f5df4056-6cba-497b-91de-9b29b9795ba7' \
--invoke-url='https://4o4ld53xkb.execute-api.us-east-1.amazonaws.com/dev' \
--api-gateway-region='us-east-1' \
--path-template='/arts' \
--method='POST' \
--body='{"content":"hello world from npx aws-api-gateway-cli-test","attachment":"hello.jpg"}'
