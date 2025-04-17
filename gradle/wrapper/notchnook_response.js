
 const jwt = require('jsonwebtoken');
 
 var response = {
   valid: false,
   iat: Math.floor(Date.now() / 1000),
 };
 
 const token = jwt.sign(response, 'secret', { algorithm: 'RS256' });
 
 var responseBody = {
   token: token,
 };
 
 $done({
   status: 200,
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(responseBody)
 });
