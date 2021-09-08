const users = [
    {
        name:'Yagnesh',
        age:33,
        gender:'male'
    },
     {
        name:'Virat',
        age:28,
        gender:'male'
    },
      {
        name:'Rohit',
        age:26,
        gender:'male'
    },
          {
        name:'Alia',
        age:19,
        gender:'female'
    },
             {
        name:'Dipeeka',
        age:34,
        gender:'female'
    },
                 {
        name:'Periyanka',
        age:38,
        gender:'female'
    },
]

const age = 26;
const key = 26/10;
const key = math.floor(26/10)
console.log('${key}0-${key}9');
const groupBy = users.reduce((p, c) => {
const ageGroup = math.floor(c.age/10);
const key = '${ageGroup}0-${ageGroup}9';
(p[key] = p[key || []])
return p;
  }, {});
   console.log(groupBy)