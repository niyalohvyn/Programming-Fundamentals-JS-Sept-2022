function solve(input){
   let type = input[0];
   let rows = Number(input[1]);
   let cols = Number(input[2]);

   let totalTickets = rows * cols;
   let income = 0;

   switch (type) {
    case "Premiere" : 
    income = totalTickets * 12;
    break;

    case "Normal" : 
    income = totalTickets * 7.5;
    break;

    case "Discount" : 
    income = totalTickets * 5;
    break;
   }

   console.log(`${income.toFixed(2)} leva`)

}

//solve(["Premiere", "10", "12"]);
//solve(["Normal", "21", "13"]);
solve(["Discount", "12", "30"]);