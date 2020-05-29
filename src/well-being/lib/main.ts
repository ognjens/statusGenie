export function getWellBeing() {
    const status: Array<string> = [
        `'s next dose is in ${Math.floor(Math.random() * 6)} hours`,
        ` will take the morning dose at ${Math.floor(Math.random() * 9)} AM`,
        ' did not take the last scheduled dose'
    ]
    

    return { 
        message: status[Math.floor(Math.random() * 2)]
     }
}