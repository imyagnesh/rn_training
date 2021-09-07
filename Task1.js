var users = [{name: 'Yagnesh',age: 33,gender: 'male',}
,{name: 'Virat',age: 28,gender: 'male'},{name: 'Rohit',age: 26,gender: 'male'},
{name: 'Alia',age: 19,gender: 'female'},
{name: 'Dipeeka',age: 34,gender: 'female'},
{name: 'Periyanka',age: 38,gender: 'female',}
]

var groupbyage = users.reduce((pr, cr) => {
debugger;
var agegroup = Math.floor(cr.age/10);
var key = `${agegroup}0-${agegroup}9`;
(pr[key] = pr[key]||[]).push(cr) 
pr[key].sort(
    function(a, b) {
       return a.age - b.age
    }
);

 

return pr;

 

},{});

 

 

 

 

 

console.log(groupbyage);