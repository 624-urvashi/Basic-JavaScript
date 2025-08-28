/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((i) => {
    if(i.profession === "developer"){
     console.log(
      `id : ${i.id}, name : ${i.name}, age: ${i.age}, profession :${i.profession}`
     )


    };
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
 arr.forEach((i) => {
  if(i.profession === "developer"){
    console.log(
      `id:${i.id}, name:${i.name}, age:${i.age}, profession:${i.profession}`
    );
  };
 })

}

function addData() {
  //Write your code here, just console.log
  let newObj = {id: 4, name: "susan", age : "22", profession:"intern"};

  arr.push(newObj);
  arr.map((i)=>{
    console.log(`
      id:${i.id}, name:${i.name}, age:${i.age}, profession:${i.profession }`);
  })
}

function removeAdmin() {
  //Write your code here, just console.log

  arr= arr.filter((i)=> i.profession !== "admin");
  arr.map((i)=>{
    console.log(`
      id:${i.id}, name:${i.name}, age:${i.age}, profession:${i.profession}`);
  })


}

function concatenateArray() {
  //Write your code here, just console.log
  let Arr1 = [
    { id: 5, name: "ram", age: "23", profession: "developer" },
    { id: 6, name: "shyam", age: "24", profession: "admin" },
    { id: 7, name: "hari", age: "21", profession: "intern" },
  ];

   arr = arr.concat(Arr1);
    arr.map((i) =>
      console.log(
        `id:${i.id}, name:${i.name}, age:${i.age}, profession:${i.profession}`
      )

    );


}
