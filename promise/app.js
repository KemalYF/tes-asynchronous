// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//         }, 2000);
//     }, 2000);
// }, 2000);

const requestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(');
        } else {
            success(`Here is your fake data from ${url} (${delay}ms)`);
        }
    }, delay);
};

const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url} (${delay}ms)`);
            }
        }, delay);
    });
}

requestPromise(`movie.com`)
.then((result) => {
    console.log(`Page 1`);
    console.log(result);
    return requestPromise(`movie.com`);
})
.then(() => {
    console.log(`Page 2`);
    return requestPromise(`movie.com`);
})
.then(() => {
    console.log(`Page 3`);
    return requestPromise(`movie.com`);
})
.catch((error) => {
    console.log(error);
});

async function requestHandler() {
    try {
        const p1 = await requestPromise(`movie.com`);
        console.log(`Page 1`);
        console.log(p1);
        const p2 = await requestPromise(`movie.com`);
        console.log(`Page 2`);
        console.log(p2);
        const p3 = await requestPromise(`movie.com`);
        console.log(`Page 3`);
        console.log(p3);
    } catch (error) {
        console.log(`Pesan Error`, error);
    }
}


// requestCallback('movie.com', (response) => {
//     console.log(`It worked, ${response}`);  
// }, function (error) {
//     console.log(`It failed, ${error}`);
// });


// requestPromise('movie.com')
//     .then((response) => {
//         console.log(`It worked, ${response}`);
//         requestPromise('movie.com')
//         .then((response) => {
//             console.log(`It worked, ${response}`);
//             requestPromise('movie.com')
//             .then((response) => {
//                 console.log(`It worked, ${response}`);
//                 requestPromise('movie.com')
//                 .then((response) => {
//                     console.log(`It worked, ${response}`);
//                 }).catch((error) => {
//                     console.log(`It failed, ${error}`);
//                 });
//             }).catch((error) => {
//                 console.log(`It failed, ${error}`);
//             });
//         }).catch((error) => {
//             console.log(`It failed, ${error}`);
//         });
//     }).catch((error) => {
//         console.log(`It failed, ${error}`);
//     });

// bubbleSort = (arr) => {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([8, 1, 7, 2, 4]));

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

delayedColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))