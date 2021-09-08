
const users = [{name: 'Yagnesh',age: 33,gender: 'male',},{name: 'Virat',age: 28,gender: 'male'},{name: 'Rohit',age: 26,gender: 'male'},{name: 'Alia',age: 19,gender: 'female'},{name: 'Dipeeka',age: 34,gender: 'female'},{name: 'Periyanka',age: 38,gender: 'female',}]



const updatedUsers = users.reduce( (p, c) => {
//    console.info(p, c);
   const ageGroup = Math.floor(c.age/10);
   const key = `${ageGroup}0-${ageGroup}9`;
   (p[key] = p[key] || []).push(c);
   p[key].sort((first,second) => first.age - second.age)
    return p; 
}, {})

console.info(updatedUsers)

  const everyUser = users.every( usr => usr.age > 18)
  console.info(everyUser)
  
  const reduceUser = users.reduce( (p, c) => {
    //   console.info(p, c);
      p = p && c.age > 18
      return p
  }, true)
  console.info('reduceUser', reduceUser)

  const one = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("one is resolved");
        }, 1000);
    })
  }

  const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("two is resolved");
        }, 1500);
    })
  }

  const three = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("three is resolved");
        }, 2500);
    })
  }

  const allCall = async () => {
      console.info('<-- allCall start -->')
      try{
          const data = await Promise.all(
            [ one(),
              two(),
              three()
            ]
          )
          console.info(data)
          console.info('<-- allCall End -->')
      }catch{

      }
  }
  
  const allSettledCall = async () => {
    console.info('<-- allSettledCall start -->')
      try{
          const data = await Promise.allSettled(
            [ one(),
              two(),
              three()
            ]
          )
          console.info(data)
          console.info('<-- allSettledCall End -->')
      }catch{

      }
  }

  const raceCall = async () => {
    console.info('<-- raceCall started -->')
      try{
          const data = await Promise.race(
            [ one(),
              two(),
              three()
            ]
          )
          console.info(data)
          console.info('<-- raceCall End -->')
      }catch{

      }
  }

  const anyCall = async () => {
    console.info('<-- anyCall start -->')
      try{
          const data = await Promise.any(
            [ one(),
              two(),
              three()
            ]
          )
          console.info(data)
          console.info('<-- anyCall End -->')
      }catch{

      }
  }

  await allCall()
  await allSettledCall()
  await raceCall()
  await anyCall()