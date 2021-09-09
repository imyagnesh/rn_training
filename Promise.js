const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1 Resolved')
        }, 1500);
    });
}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 Resolved')
        }, 1000);
    });
}

const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 3 Resolved')
        }, 2500);
    });
}

const allSettledPromise = async () => {
    try {
        const allSettledValues = await Promise.allSettled([promise1(), promise2(), promise3()]);
        console.log(`allSettledValues : ${allSettledValues}`);
    }
    catch (error) {
        console.log(error)
    }
}

const allPromise = async () => {
    try {
        const allValues = await Promise.all([promise1(), promise2(), promise3()]);
        console.log(`allValues : ${allValues}`)
    } catch (error) {
        console.log(error)
    }

}
const racePromise = async () => {
    try {
        const raceResult = await Promise.race([promise1(), promise2(), promise3()]);
        console.log(`RaceValues : ${raceResult}`)
    } catch (error) {
        console.log(error)
    }
}

const anyPromise = async () => {
    try {

        const anyResult = await Promise.any([promise1(), promise2(), promise3()]);
        console.log(`anyResult : ${anyResult}`)
    }
    catch (error) {
        console.log(error)
    }
}
allPromise();
allSettledPromise();
racePromise();
anyPromise(); 