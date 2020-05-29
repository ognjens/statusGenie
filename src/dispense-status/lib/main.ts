export function getDispenseStatus() {
    const responses = [
        'You have taken your morning dose',
        'You haven\'t taken your morning dose',
        'You have taken your evening dose',
        'You have not taken your evening dose',
        'You haven\'t taken your ibuprofen',
        'You have taken 3 aspirin pills today'
    ]

    const status = {
        morning: {
            aspiring: false,
            ibuprofen: true
        },
        noon: {
            aspirin: true,
            ibuprofen: true
        },
        evening: {
            aspirin: false,
            ibuprofen: false
        }
    }
    
    const response = responses[Math.floor(Math.random()*responses.length)];
    
    return { 
        message: response,
        status: status
    }
}