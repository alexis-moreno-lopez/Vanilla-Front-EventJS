const squares = document.querySelectorAll('.case');



squares.forEach(square => {
    console.log(square);
    square.addEventListener('click', function (event) {
       let ramdom = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
       square.style.backgroundColor = ramdom
       
       
    })
});
