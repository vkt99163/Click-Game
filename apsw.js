
// let todo = [];
// let request= prompt("Please enter your request");

// while(true){
//   if(request== "quit"){
//     console.log("you are quitting app")
//     break;
//   }
//   if (request== "list" ){
//     console.log("__________");
//     for (task of todo){
//       console.log(task)
//     }
//     console.log("_________")

//   } else if (request== "add"){
// let task= prompt("Enter the task you want to add");
// todo.push(task);
// console.log("task added");
//   }
//   request=prompt("please enter your request");
// }

// let num = 5;
// let factorial = 1;

// for (i = 1; i <= num; i++) {

//   factorial *= i;

//   console.log(`factorialof${num}is${factorial}`);
// }

let count = 0;
    const btn = document.getElementById("btn");
    const countDisplay = document.getElementById("count");
    const message = document.getElementById("message");

    btn.addEventListener("click", function() {
      count++;
      countDisplay.textContent = count;

      if (count === 10) {
        message.textContent = "🎉 Great job! You clicked 10 times!";
        btn.disabled = true; // Disable button after 10 clicks
      }
    });
