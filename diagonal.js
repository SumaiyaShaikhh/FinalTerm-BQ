let totalLines = 7; 

for (let row = 0; row < totalLines; row++) {
  let star = ""; 

  for (let column = 0; column < totalLines; column++) {
   
    if (row === column) {
      star += "*";
    } else {
      star += " ";
    }
  }

  console.log(star); 
}

