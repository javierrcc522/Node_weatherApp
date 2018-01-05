var asyncAdd = (a, b) => {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 2500);
  });
};

asyncAdd(9, 19).then(function(works){
  console.log('Result', works);
}, function(noWork){
  console.log(noWork);
});




// var somePromise = new Promise(function(resolve, reject){
//   setTimeout(()=>{
//     resolve("It's working ;p");
//   }, 2500);
// });
//
//
// somePromise.then(
//   (resolve)=>{
//   console.log('Success:', resolve);
// },function(reject){
//   console.log('Not bueno', reject);
// });
