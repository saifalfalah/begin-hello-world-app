exports.handler = async function http(req) {
  try {
    console.log("Begin API called");
    console.log(req.path);
    console.log(req.httpMethod);
    console.log(trueOrFalse());
    throw new error("Oops");
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

const trueOrFalse = () => {
  return true;
};
