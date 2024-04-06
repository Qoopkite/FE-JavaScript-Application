// 4번 문제.

let user = {
  name: "지환",
  years: 24,
};


let {name:Name, years:age, isAdmin}=user;
if(isAdmin===undefined){isAdmin=false;}

alert(Name); // "지환"
alert(age); // 24
alert(isAdmin); // false
