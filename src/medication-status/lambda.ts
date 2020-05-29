import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import httpResponse from '@vacationtracker/api-gateway-http-response'
import { getMedicationStatus } from './lib/main'
import medications from '../common/medications.json'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  let type: string = '';

  if (event.queryStringParameters) {
    type = event.queryStringParameters.medication
  }

  try {
    const result = getMedicationStatus(medications, type)
    return httpResponse(result)
  } catch (err) {
    return httpResponse(err, 400)
  }
}