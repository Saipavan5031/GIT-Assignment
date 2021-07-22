const prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(200);
    },2000);
});
prom.then(data=>{
    console.log(data);
});