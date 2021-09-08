const register = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('token')
        }, 1000);
    })

}
const loadData = async () => {
    try{
        setTimeout(() => {
        const res = await fetch(url);
        console.log(res)
    }, 1500);
    } catch(err) {
      console.log(err)
    }
    
  };
  
  loadData();
Promise.allSettled([
    Promise.resolve('promise1'),
    Promise.reject('promise2')
]).then(console.log)