//create an array of people
const people = [

{name: 'Harry', age:20},
{name: 'Quentin', age: 452},
{name: 'Luigi', age: 96}

]
//returns a promise that will return after 3 seconds with the array people
export default () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            return resolve(people)
        }, 3000);
    })
}