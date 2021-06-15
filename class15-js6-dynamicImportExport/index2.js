const btn = document.querySelector('.btn');


btn.addEventListener('click',()=>{
    //the import will work as a promis so resolve it eith a then and catch
    import('./add.js').then((func)=>{
        console.log(func)
        // alert(add(2,3));
        alert(func.add(2,3));
        //for regular funcand const give the regular name
        alert(func.default(5,5));
        //for default export give the default keyword 
    }
    
    ).catch((err)=>alert(err));
    
})




