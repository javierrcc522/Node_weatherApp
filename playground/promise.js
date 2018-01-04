var somePromise = new Promise(function(resolve, reject){
  setTimeout(()=>{
    resolve("It's working ;p");
  }, 2500);
});


somePromise.then(
  (resolve)=>{
  console.log('Success:', resolve);
},function(reject){
  console.log('Not bueno', reject);
});
