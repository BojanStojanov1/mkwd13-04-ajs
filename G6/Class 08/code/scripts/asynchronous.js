// ASYNC / AWAIT
// await must be inside an async method ! ! !
// await must be used with a function that returns a Promise()




try {
    let documentsUrl = 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G6/Class%2008/documents.json';

    async function showImportantDocuments() {
        let startTime = new Date().getTime()
        let response = await fetch(documentsUrl);
        let documents = await response.json();
        let important = documents.filter(doc => doc.important);
        showDocuments(important);
        console.log(`Done in: ${(new Date().getTime() - startTime) / 1000}s`);
    }

    function showDocuments(documents) {
        // Validation for the document types
        if (!documents && typeof (documents) != 'object') {
            throw new Error("Issue with documents!");
        }
        if (documents.length === 0) {
            throw new Error("No documents found on the server!");
        }
        documents.forEach(doc => {
            console.log(`${doc.name}.${doc.type} (${doc.size}MB)`);
        })
    }

    showImportantDocuments();
    console.log("Test test test");
} catch (error) {
    console.log(error);
}
