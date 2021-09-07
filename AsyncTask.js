const p1 = ()=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('p1 resolved')
        }, 1500);
    });
};
const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p2 resolved');
        }, 1000);
    });
};

const p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p3 resolved');
        }, 1000);
    });
};

const syncAll = async () => {
    try{
    const res = await Promise.all([
        p1(),
        p2(),
        p3()
    ]);
    console.log(res);  
} catch(err){
console.log(err);
}
};

syncAll();