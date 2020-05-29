interface StatusPerPeriod {
    [key: string]: {
        [key: string]: any
    }
}

interface Medications {
    [key: string]: {
        [key: string]: boolean | number,
    }
}

export function dispenseTime(timeOfTheDay: string, medications: Array<string>) {
    const status: StatusPerPeriod = {
        morning: {},
        noon: {},
        evening: {}
    }

    const periods = ['morning', 'noon', 'evening']

    periods.forEach((period) => {
        const list: Medications = {}
        medications.forEach(medicationName => {
            list[medicationName] = {
                status: Math.random() >= 0.5,
                numberOfPills: Math.floor(Math.random() * 10)
            }
        })
        status[period] = {
            list,
            periodStatus: Math.random() >= 0.5
        }
    })

    const statusForSelectedPeriod = status[timeOfTheDay];

    return { 
        requestedTime: timeOfTheDay,
        status: statusForSelectedPeriod
     }
}