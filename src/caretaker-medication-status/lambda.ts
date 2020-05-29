import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import httpResponse from '@vacationtracker/api-gateway-http-response'
import { caretakerMedicationStatus } from './lib/main'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {

  if (!event.body) {
    throw new Error ('No input specified');
  }

  const body = event.body;

  try {
    const result = caretakerMedicationStatus(JSON.stringify(body))
    return httpResponse(result)
  } catch (err) {
    return httpResponse(err, 400)
  }
}