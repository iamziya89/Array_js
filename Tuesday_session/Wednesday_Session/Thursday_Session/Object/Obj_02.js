function createPerson(fullName,job,place){
    return {
        fullName:fullName,
        job : job,
        place : place,
    };
}
let p=createPerson("Mohd Ziya","Software Engineer","Mumbai");
let q=createPerson("Mohd Arbaz","Software Engineer","Lucknow");
console.log(p.fullName,q.fullName,p.place,q.place);