var somePromise = new Promise((resolve, reject)=>{
  resolve("It's working ;p");
});


somePromise.then((message)=>{
  console.log('Success:', message );
});
