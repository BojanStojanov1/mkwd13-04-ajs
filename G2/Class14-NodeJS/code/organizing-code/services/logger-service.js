export function logInfo(message) {
    const dateTime = new Date();
    console.log(`[INFO][${dateTime.toLocaleString()}]: ${message}`);
}

export function logError(error) {
    const dateTime = new Date();
    console.log(`[ERROR][${dateTime.toLocaleString()}]: ${error}`);
}

let test = 123;