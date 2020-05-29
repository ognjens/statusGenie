export function getRefillStatus() {
  const today = new Date()
  const randomNumberOfDays: number = Math.floor(Math.random() * 11)
  const nextRefillShipment = new Date(today.setDate(today.getDate() + randomNumberOfDays))
  nextRefillShipment.setHours(14)
  nextRefillShipment.setMinutes(0)

  return {
    nextRefill: nextRefillShipment.toISOString(),
    lastRefill: new Date(nextRefillShipment.setDate(nextRefillShipment.getDate() - 10)).toISOString()
  }
}