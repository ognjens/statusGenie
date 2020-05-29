import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import httpResponse from '@vacationtracker/api-gateway-http-response'
import { dispenseTime } from './lib/main'
import medications from '../common/medications.json'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.pathParameters || !event.pathParameters.time) {
      throw new Error ('No time specified');
    }

    const timeOfTheDay = event.pathParameters.time;

    if (!['morning', 'noon', 'evening'].includes(timeOfTheDay)) {
      throw new Error('Invalid time of the day')
    }

    const result = dispenseTime(timeOfTheDay, medications)
    return httpResponse(result)
  } catch (err) {
    return httpResponse(err, 400)
  }
}