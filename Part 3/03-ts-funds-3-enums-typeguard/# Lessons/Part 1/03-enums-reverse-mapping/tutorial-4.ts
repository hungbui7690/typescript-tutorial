/*
  Enums - Gotcha : Reverse Mapping


*/

// Scenario 4: need to understand Scenario 3
enum OnlineStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  data: string[]
  result: OnlineStatus
}

function getServerResponse(): ServerResponse {
  return {
    data: ['first item', 'second item'],

    // Method 1
    // result: OnlineStatus.Success, // OnlineStatus.Success = 200

    // Method 2
    result: 200, // we can use 200 here instead of "OnlineStatus.Success" -> but if OnlineStatus.Success = 'Success' > then we cannot not put 'Success' here since it is string, and TS will not allow it
  }
}

/*
  Method 2: 
  - result: OnlineStatus.Success
  or 
  - result: 200
  => both works really well

  -> Because OnlineStatus.Success has type of number -> at method 2, we can use the number directly
  -> But if OnlineStatus.Success has type of string -> we cannot do the same things -> cannot set result: "200" 


*/
