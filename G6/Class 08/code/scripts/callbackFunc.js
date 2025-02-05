console.log("1. This will be executed first!");

setTimeout(() => {
    console.log("2. This will be executed second!");
    setTimeout(() => {
        console.log("3. This will be executed third!");
        setTimeout(() => {
            console.log("4. This will be executed fourth!");
            setTimeout(() => {
                console.log("5. This will be executed fifth!");
                setTimeout(() => {
                    console.log("6. This will be executed sixth!");
                },200);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000)


console.log("This should be executed independently of the prevoius code");