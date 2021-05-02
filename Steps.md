### Testing in Local

Testing arts create lambda.

```
serverless invoke local --function create --path mocks/create-event.json
serverless invoke local --function get --path mocks/get-event.json
serverless invoke local --function list --path mocks/list-event.json
serverless invoke local --function update --path mocks/update-event.json
serverless invoke local --function delete --path mocks/delete-event.json
```
