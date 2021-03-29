// Your code here
const dodger = document.getElementById('dodger')

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
  });


  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left >= 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left >= 0) {
      dodger.style.left = `${left + 5}px`;
    }else{
        dodger.style.left = "0px";
    }
  }

  function moveDodgerUp(){
    const leftNumbers = dodger.style.bottom.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left >= 0) {
        dodger.style.bottom = `${left + 5}px`;
    }else{
        dodger.style.bottom = "0px";
    }
  }

  function moveDodgerDown(){
    const leftNumbers = dodger.style.bottom.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left >= 0) {
        dodger.style.bottom = `${left - 5}px`;
    }
  }