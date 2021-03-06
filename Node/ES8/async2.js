const helloWorld = () =>{
   return new Promise((resolve,reject) => { 
    (true)
        ? setTimeout(_=> {resolve('Hello world!')},3000)
        : reject(new Error('Error!'));
   });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async() => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(err){
        console.log(err);
    }
}
anotherFunction()