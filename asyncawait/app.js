const hello = async () => {
    // throw new Error(`Error Cuyyy`);
    return `Hello, World!`;
};

hello()
    .then((value) => {
        console.log(`response`,value)
    }).catch((error) => {
        console.log(`error`,error)
    });

const delayedColorChange = (newColor, delay, doNext) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay > 1000) {
                reject(`Connection Timeout :(`);
            } else {
                document.body.style.backgroundColor = newColor;
                resolve();
            }
        }, delay);
    });
}

// delayedColorChange('red', 1000)
// .then(() => delayedColorChange('orange', 1000))
// .then(() => delayedColorChange('yellow', 1000))
// .then(() => delayedColorChange('green', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return `All Done!`;
}

rainbow().then(() => console.log(`End of Rainbow!`));