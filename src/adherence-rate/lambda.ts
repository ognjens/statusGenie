import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import httpResponse from '@vacationtracker/api-gateway-http-response'
import { getAdherenceRate } from './lib/main'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {

  try {
    const result = getAdherenceRate()
    return httpResponse(result)
  } catch (err) {
    return httpResponse(err, 400)
  }
}