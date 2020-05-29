export function getReminders() {
  const morning = new Date()
  const afternoon = new Date()
  const evening = new Date()
  morning.setMinutes(morning.getMinutes() + 1)
  afternoon.setMinutes(afternoon.getMinutes() + 3)
  evening.setMinutes(evening.getMinutes() + 5)

  return {
    schedule: {
      freq : 'WEEKLY',
      byDay: ['MO', 'TU', 'WE', 'TH', 'FR']
    },
    reminders: [
      {
        period: 'morning',
        time: morning.toISOString().split('Z')[0]
      },
      {
        period: 'afternoon',
        time: afternoon.toISOString().split('Z')[0]
      },
      {
        period: 'evening',
        time: evening.toISOString().split('Z')[0]
      }
    ]
  }
}