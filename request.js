// GET request used request module
const request = require("request");
request("http://www.google.com",function(error,response,body)
{
  console.log(body);
});

// Error – In case there is any error received when using the GET request, it will be recorded here.
// Response- The response will have the http headers which are sent back in the response.
// Body- The body will contain the entire content of the response sent by Google.