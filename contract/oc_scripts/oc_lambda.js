exports.handler = async (event) => {
    var wheatlist =  {
      '0x9335488Ea67fD852911F5703513dC0b5338D905f': {
        token: {
          r: '0x6bb982900e11b15cab60ff522941463df5f3e4c05b1cea6dbb92ba860d223419',
          s: '0x4a9fcd934b237342db741a89a7f9c5f0fda4169011d745dc88abef0232c43ef2',
          v: 28
        }
      }
    }
  
    try {
      var address = event.queryStringParameters.address || "";
      var wladdr = wheatlist[address];
      var token = wheatlist[address]["token"];
    }
    catch (err) {
      token = "";
    }
    console.log("Address is ", address)
    console.log("Wheatlist address is", wladdr)
    console.log("Token is", token)
    const response = {
      statusCode: 200,
      body: JSON.stringify({"signature": token}),
    };
    return response;
  };
