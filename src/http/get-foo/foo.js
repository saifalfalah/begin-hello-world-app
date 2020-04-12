exports.handler = async function http(request) {
  return {
    statusCode: 201,
    headers: { "Content-Type": "application/json; charset=utf8" },
    body: JSON.stringify({ ok: true }),
  };
};
