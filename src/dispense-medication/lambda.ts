import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import httpResponse from '@vacationtracker/api-gateway-http-response'
import { dispenseMedication } from './lib/main'
import medications from '../common/medications.json'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  if (!event.pathParameters) {
    throw new Error ('No medication type specified')
  }

  const type: string = event.pathParameters.type
  const force: boolean = event.queryStringParameters ? Boolean(event.queryStringParameters.force) : false

  try {
    const result = dispenseMedication(type, medications, force)
    return httpResponse(result)
  } catch (err) {
    const statusCode = err.code === 'MEDICATION_NOT_RECOGNIZED' ? 404 : 400
    return httpResponse(err, statusCode)
  }
}