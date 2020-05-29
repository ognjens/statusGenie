interface paramValues {
    [key: string]: any
}

export function caretakerMedicationStatus(params: any) {    
        let prefix = '';
        let value = '';
        let values: paramValues = [];
        const rez = JSON.parse(params)

    const status: Array<string> = [
        ` is not running out of any medication. Everything looks good.`,
        ` is running low on Aspirin, only ${Math.floor(Math.random() * 5)} pills left.`,
        ' is running low on Aspirin and Vitamin D'
    ]
    

    return { 
        message: prefix + value + status[Math.floor(Math.random() * 2)],
        resp: typeof params,
        result: rez
     }
}