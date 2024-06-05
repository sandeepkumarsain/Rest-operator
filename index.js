function sum( ...add){
           

    let sum =0;
    for(let i in add){
        sum += add[i];
    }

    document.write(sum )

}
sum( 10, 20, 30, 40, 50, 60, 70, 80, 90);
