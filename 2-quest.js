function fibonacci(numero){
    let a = 0 
    let b = 1
    while(a <= numero){
        if (a=== numero){
            return console.log('pertence')
        }
        let c = a +b;
        a = b
        b = c
    }
    return console.log('não pertence')
}

fibonacci(21)
fibonacci(22)