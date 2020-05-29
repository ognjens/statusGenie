interface Status {
    [key: string]: {
        morning: number
        noon: number
        evening: number
    }
}

export function dispenseMedication(medicationName: string, medications: Array<string>, force: boolean) {
    // Throw an error if medication is not in the list of supported medications (see ../common/medications.json)
    if (!medications.includes(medicationName)) {
        throw {
            code: 'MEDICATION_NOT_RECOGNIZED',
            message: `${medicationName} is not in the list of your medications.`,
            data: {
                medicationName: medicationName
            }
        }
    }

    const responseStatusCodes = ['SUCCESS', 'DISPENSE_IN_ADVANCE', 'ALREADY_DISPENSED']
    const responseStatus = force ? 'SUCCESS' : responseStatusCodes[Math.floor(Math.random() * 5)]

    const now = new Date()
    // Get random period of the day
    let time: 'morning' | 'noon' | 'evening' = 'morning'
    const hour = now.getHours()

    if (hour > 14 && hour < 20) {
        time = 'noon'
    } else if (hour > 20 || hour < 8) {
        time = 'evening'
    }

    // Generate status object for each medication (i.e., { aspirin: { morning: 3, noon: 2, evening: 1 }})
    const status: Status = medications.reduce((list: Status, medication: string) => {
        list[medication] = {
            morning: Math.floor(Math.random() * 4 + 1), // Generate random number of pills
            noon: Math.floor(Math.random() * 4 + 1),
            evening: Math.floor(Math.random() * 4 + 1)
        }
        return list
    }, {})

    // Return status for selected medication and period of the day
    const current = status[medicationName][time]

    if (responseStatus === 'DISPENSE_IN_ADVANCE') {
        throw {
            code: responseStatus,
            message: `${medicationName} is scheduled to be dispensed in more than an hour.`,
            data: {
                medicationName: medicationName,
                timeOfDay: time,
                hour: new Date(now.getHours() + 2).getHours(),
                numberOfPills: current
            }
        }
    }

    if (responseStatus === 'ALREADY_DISPENSED') {
        throw {
            code: responseStatus,
            message: `${medicationName} is already dispensed.`,
            data: {
                medicationName: medicationName,
                timeOfDay: time,
                hour: new Date(now.getHours() - 1).getHours(),
                numberOfPills: current,
                force: force
            }
        }
    }

    return { 
        medicationName: medicationName,
        timeOfDay: time,
        hour: hour,
        numberOfPills: current
     }
}