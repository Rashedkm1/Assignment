function multiplicationTable(num) {
    
    for (var i = 1; i <= 10; i++ ){        
        var product = num * i;
        console.log(`${num} * ${i} = ${product}`);
    }
   
}

multiplicationTable(10);