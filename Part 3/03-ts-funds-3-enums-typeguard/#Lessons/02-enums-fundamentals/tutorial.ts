/*
  Enums
  - Enums in TypeScript allow us to define a set of "named constants". 
  - Using enums can make it easier to document intent, or create a set of distinct cases.

*/

enum Status {
  Success = 200,
  Error = 'Error',
}

// when there's no value > it starts at 0
enum ServerResponseStatus {
  Success,
  Error,
}
console.log(ServerResponseStatus) // {0: 'Success', 1: 'Error', Success: 0, Error: 1}

interface ServerResponse {
  result: ServerResponseStatus // enum
  data: string[] // array of string
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  }
}

const response: ServerResponse = getServerResponse()
console.log(response)
