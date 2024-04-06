// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

  const newarr=arr.filter((A)=>A.part==="fe");

  newarr.sort(function(a,b){
    return b.age-a.age;
  });

  const newarr2 = newarr.map(function(item) {
    return { ...item, part: item.part.toUpperCase() };
  });