// // // Love icon function
// // let loveCount = 0;

// //  function increaseLove (){
// //   loveCount++
// //   document.getElementById('loveCount').innerText = loveCount;
// // }


// // // Store History

// // const history = []


// // function getCurrentTime() {
// //   return new Date().toLocaleTimeString('en-US', {
// //     hour: '2-digit',
// //     minute: '2-digit',
// //     second: '2-digit',
// //     hour12: true
// //   });
// // }

// // //  call function
// //     let totalCoin = 100; 
// //     const coinDisplay = document.getElementById("coinTotal");

// //     function call(card) {
// //       const title = card.querySelector(".service-title").textContent;
// //       const number = card.querySelector(".number").textContent;

// //       if (totalCoin >= 20) {
// //         totalCoin -= 20;
// //         coinDisplay.textContent = totalCoin;
     

// //         const time =  getCurrentTime()

// //         history.push({

// //             title,
// //             number,
// //             time,
// //         })
// //    alert(`📞 calling ${title} ${number}...`);

// //         console.log("History" , history);
        

// //       } else {
// //         alert(`❌ You do not have the coins! takes at least 20 coins to call`);
// //       }
// //     }

    
// //     document.querySelectorAll(".card").forEach(card => {
// //       const btn = card.querySelector(".call-btn");
// //       btn.addEventListener("click", () => call(card));
// //     });


    




//   // Love icon function
//   let loveCount = 0;

//   function increaseLove() {
//     loveCount++;
//     document.getElementById('loveCount').innerText = loveCount;
//   }

//   let copyCount = 0

//   // Store History
//   const history = [];

//   function getCurrentTime() {
//     return new Date().toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: true
//     });
//   }

//   let totalCoin = 100; 
//   const coinDisplay = document.getElementById("coinTotal");
//   const historyContainer = document.getElementById("historyContainer");

//   function renderHistory() {
//     // Clear previous content
//     historyContainer.innerHTML = '';

//     // Map over history array and create cards
//     history.forEach(item => {
//       const card = document.createElement('div');
//       card.className = "flex justify-between items-center bg-gray-100 rounded-lg p-4 mt-4 max-w-[352px] w-full";

//       card.innerHTML = `
//         <div>
//           <h2 class="font-semibold text-[18px]">${item.title}</h2>
//           <p class="text-[18px]">${item.number}</p>
//         </div>
//         <div>
//           <p class="text-[18px]">${item.time}</p>
//         </div>
//       `;

//       historyContainer.appendChild(card);
//     });
//   }

//   function call(card) {
//     const title = card.querySelector(".service-title").textContent;
//     const number = card.querySelector(".number").textContent;

//     if (totalCoin >= 20) {
//       totalCoin -= 20;
//       coinDisplay.textContent = totalCoin;

//       const time = getCurrentTime();

//       history.push({ title, number, time });

//       // Render the updated history
//       renderHistory();

//       alert(`📞 calling ${title} ${number}...`);
//       console.log("History", history);

//     } else {
//       alert(`❌ You do not have the coins! takes at least 20 coins to call`);
//     }
//   }

//   document.querySelectorAll(".card").forEach(card => {
//     const btn = card.querySelector(".call-btn");
//     btn.addEventListener("click", () => call(card));


//     const copyBtn = card.querySelector(".copy-btn")

//   copyBtn.addEventListener("click", () => {
//     const number = card.querySelector(".number").textContent;

//     navigator.clipboard.writeText(number)
//         .then(() => {
//             alert(`Number ${number} copied to clipboard!`);
//             copyCount= copyCount +1
//         })
//         .catch(err => {
//             console.error('Failed to copy: ', err);
//         });
// });


//   });


  
//     const btn = document.getElementById("clear-btn");
//     btn.addEventListener("click", () => {

//       history.length = 0;
// renderHistory()
//     });

// console.log('copy count' , copyCount);

//    const copyCountShowElement = document.getElementById("showCopyCountNumber")

//    copyCountShowElement.innerHTML = copyCount




// Love icon function
let loveCount = 0;
function increaseLove() {
  loveCount++;
  document.getElementById('loveCount').innerText = loveCount;
}

// Copy count
let copyCount = 0;

// Store history
const history = [];

// Coins
let totalCoin = 100;
const coinDisplay = document.getElementById("coinTotal");
const historyContainer = document.getElementById("historyContainer");
const copyCountShowElement = document.getElementById("showCopyCountNumber");

// Get current time
function getCurrentTime() {
  return new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

// Render history
function renderHistory() {
  historyContainer.innerHTML = '';

  if(history.length === 0){
    historyContainer.innerHTML = '<p class="text-gray-500">No history yet.</p>';
    return;
  }

  history.forEach(item => {
    const card = document.createElement('div');
    card.className = "flex justify-between items-center bg-gray-100 rounded-lg p-4 mt-4 max-w-[352px] w-full";

    card.innerHTML = `
      <div>
        <h2 class="font-semibold text-[18px]">${item.title}</h2>
        <p class="text-[18px]">${item.number}</p>
      </div>
      <div>
        <p class="text-[18px]">${item.time}</p>
      </div>
    `;

    historyContainer.appendChild(card);
  });
}

// Call function
function call(card) {
  const title = card.querySelector(".service-title").textContent;
  const number = card.querySelector(".number").textContent;
console.log("call");

  if (totalCoin >= 20) {
    totalCoin -= 20;
    coinDisplay.textContent = totalCoin;

    const time = getCurrentTime();
    history.push({ title, number, time });

    renderHistory();

    alert(`📞 calling ${title} ${number}...`);

  } else {
    alert(`❌ You do not have the coins! takes at least 20 coins to call`);
  }
}

// Attach events to all cards
document.querySelectorAll(".card").forEach(function(card) {
  const btn = card.querySelector(".call-btn");
  btn.addEventListener("click", function(){call(card)} );

  const copyBtn = card.querySelector(".copy-btn");
  copyBtn.addEventListener("click", function (){
    const number = card.querySelector(".number").textContent;

    navigator.clipboard.writeText(number)
      .then(function() {
        alert(`Number ${number} copied to clipboard!`);
        copyCount += 1;
        copyCountShowElement.innerText = copyCount;
      })
      .catch(function(err) {
        console.error('Failed to copy: ', err);
      });
  });
});

// Clear button
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function() {
  history.length = 0;
  renderHistory();
  copyCount = 0;
  copyCountShowElement.innerText = copyCount;
});
