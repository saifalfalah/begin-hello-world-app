exports.handler = async function http(req) {
  try {
    console.log("Begin API called");
    return {
      headers: {
        "content-type": "application/json; charset=utf8",
        "cache-control":
          "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      },
      body: JSON.stringify({
        message: "Hello from your Begin API!",
      }),
    };
  } catch (error) {
    return {
      body: JSON.stringify({
        message: "An error ocurred. Sorry",
      }),
    };
  }
};
