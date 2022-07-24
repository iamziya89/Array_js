// let fname="Mohd"
// let lname="Mohd"
// console.log(fname==lname);   //   in primitive data type its give true value
// console.log(fname===lname);  //   in primitive data type its give true value

// let n1=[1,2,3]
// let n2=[1,2,3]
// console.log(n1==n2);    //   in non-primitive data type its give false value
// console.log(n1===n2);   //   in non-primitive data type its give false value

// let n1=[1,2,3]
// let n2=n1;
// console.log(n1==n2);  //  gives true value

// let fname="MOHDZIYA";
// // let fname='Vasanthkumar'
// console.log(fname.slice(0,7));
// console.log(fname.slice(-12,-5));
// console.log(fname.charAt(0));
// console.log(fname[0],fname.charAt(0));


// let fname="MOHDziYA";
// // console.log(fname.slice(4));
// // console.log(fname.substring(-5,-2))    substring don't take negative value but slice take -ve and +ve value both
// // console.log(fname.substr(0,4));
// // console.log(fname.substr(1,4));
// console.log(fname.toLocaleLowerCase());
// console.log(fname.toLocaleUpperCase());


// let fname='    Mohd Ziya   '
// console.log(fname)
// console.log(fname.trimStart());
// console.log(fname.trimEnd());


// let fname='VasanthKumar'
// // fname[0]='j'
// // console.log(fname);
// // console.log(fname.replace('V','j'));   replace V by j
// // console.log(fname.replaceAll('a','j'));//   replace all a   by j


// let news='India won the world cup'
// console.log(news.replace('India','Pakistan'));

// let news='India won the world cup. India won the 2011 world cup'
// console.log(news.replaceAll('India','Pakistan'));


// ;let news='India won the world cup'
// console.log(news.replaceAll('india','Pakistan'))


let news='India will win the world cup 2022'
// console.log(news.length);
// console.log(news.split(' ').length);
// console.log(news.split('a'));
console.log(news.split('win '));


