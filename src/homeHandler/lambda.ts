import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import httpResponse from '@vacationtracker/api-gateway-http-response'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  try {
    const appId = event.requestContext.apiId
    return httpResponse({
      appId
    })
  } catch (err) {
    return httpResponse(err, 400)
  }
}