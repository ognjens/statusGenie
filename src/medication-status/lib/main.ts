
interface Medications {
    [key: string]: number
}

export function getMedicationStatus(medications: Array<string>, medicationName: string) {
    const status: Medications = {};

    if(!medications.includes(medicationName.toLowerCase())) {
        
        medications.forEach(medication => {
            status[medication] = Math.floor(Math.random() * 10);
        })

        throw {
            code: 'MEDICATION_NOT_RECOGNIZED',
            message: `${medicationName} is not in the list of your medications.`,
            data: {
                medicationName: medicationName,
                status: status
            }
        }
        
    } else {
        status[medicationName] = Math.floor(Math.random() * 10);
    }
    

    return { 
        status: status,
        pillsLeft: status[medicationName],
        medicationName: medicationName
     }
}