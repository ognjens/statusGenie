interface RequestHeaders {
  [key: string]: string
}

declare module '@vacationtracker/api-gateway-http-response' {
  import { APIGatewayProxyResult } from 'aws-lambda'
  function httpResponse(payload?: any, statusCode?: number, headers?: RequestHeaders, isBase64Encoded?: boolean): APIGatewayProxyResult
  export = httpResponse
}