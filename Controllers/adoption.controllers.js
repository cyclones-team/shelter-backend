const axios = require('axios');

let adoptionArray=[];
const adoptionHandler = (req,res) => {
    const config = {
        url: 'https://api.petfinder.com/v2/animals?oauth_signature_method=HMAC-SHA1&oauth_timestamp=1629488591&oauth_nonce=mqv0Z8&oauth_version=1.0&oauth_signature=F1sKAOkLi0K8iRcE6RVsXTtId54=',
        headers: { "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyNTN1S09TYW5DZmVGYjhDWmRldDBlbjhDbzZxRW50Y1NoMTNwejQwTWtLZ2dBS25NayIsImp0aSI6ImYyNjBiYTJkODU5MmY2MzJiZTRkZGZlMzgwMjFhMzIzNzc2YWZjMjc2YzRkYzEyYTc3ZmUzOGQxNmEzYzdkYmQxN2JlMzkwOGVjMmVkMTJlIiwiaWF0IjoxNjI5NTc1MTI4LCJuYmYiOjE2Mjk1NzUxMjgsImV4cCI6MTYyOTU3ODcyOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.zXRcaj0lgflyqVJxTB0FuxJ7Ki5z8yNU0rd0c8dCOeOmTT8mehDB54FCSuJnWISlos7_oFzDWa4_-E8f0Z0jTBmqaSsQpj9U9snI8U8_Jv_1wWB8rZ4axt-rzrw1CAy-H_Ng0l8uqONYspjlVaT7WXR9bTIp7s506PQ1pksdjowtRNqpMQwStI41aS1VWajeEN5U11FH8S4Qpk__Ahl7koF8EyOErUggBwAMgnwnOxZDkCQu1hm9Cw3i-T8R-fGX5_DhzHNdZkjEfQH7qo0y_pTYB0IU88oQ8IWl59uyKCU3hW8K3B52ZN5cU2ipGmMQwK0hgILT0hpEvJwLgutY-w` },
    }
    axios(config, config.url)
        .then(axiosResults => {
            // console.log(axiosResults)
            adoptionArray.push(axiosResults.data.animals);
        })
        .catch(err => console.error(err));
        res.json(adoptionArray)
}
module.exports=adoptionHandler;