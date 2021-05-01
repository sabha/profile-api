export default function handle(lambda) {
  return async function (event, context) {
    let body, statusCode;
    try {
      body = await lambda(event.context);
      statusCode = 200;
    } catch (e) {
      boody = { error: e.message };
      statusCode = 500;
    }
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
}
