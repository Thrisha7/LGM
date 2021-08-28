const data = [
    {
        name: "THRISHA S",
        regno: "111519205054",
        NUMBER_THEORY:"O",
        SOFTWARE_ENGINEER:"A+",
        OBJECT_ORIENTED_PROGRAMMING: "A",
        DATA_STRUCTURES: "B+"
    },
    {
        name: "SHANMATHI S",
        regno: "111519205043",
        NUMBER_THEORY:"A+",
        SOFTWARE_ENGINEER:"A+",
        OBJECT_ORIENTED_PROGRAMMING: "A+",
        DATA_STRUCTURES: "A+"
    },
    {
        name: "TEJASVI J",
        regno: "111519205050",
        NUMBER_THEORY:"O",
        SOFTWARE_ENGINEER:"O",
        OBJECT_ORIENTED_PROGRAMMING: "A+",
        DATA_STRUCTURES: "A+"
    },
    {
        name: "KARTHI S",
        regno: "1119405110",
        NUMBER_THEORY:"A",
        SOFTWARE_ENGINEER:"B+",
        OBJECT_ORIENTED_PROGRAMMING: "O",
        DATA_STRUCTURES: "O"

    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "NUMBER_THEORY : " + data[i].NUMBER_THEORY +"</h3>" + "<h3>" + "SOFTWARE_ENGINEER : " 
            + data[i].SOFTWARE_ENGINEER +"</h3>" +"<h3>" + "OBJECT_ORIENTED_PROGRAMMING : " + data[i].OBJECT_ORIENTED_PROGRAMMING +"</h3>"+
            "DATA_STRUCTURES : " +data[i].DATA_STRUCTURES + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "Information is not available!!!" + "</h3>" 

})