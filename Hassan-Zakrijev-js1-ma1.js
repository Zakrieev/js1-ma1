// Question 1

const cat = {
    complain: function() {
      console.log("Meow!");
    }
  };
  
  // Question 2
  
  const heading = document.querySelector("h3");
  
  // Question 3
  
  heading.style.fontSize = "2em";
  
  // Question 4
  
  heading.classList.add("subheading");
  
 // question 5

   const paragraph = document.querySelectorAll("p");
   or(let i = 0; i < paragraph.length; i++){
    
   console.log(paragraph[i].innerText);
   }

  // Question 6
  
  const resultsContainer = document.querySelector(".results");
  
  resultsContainer.innerHTML = "<p>New paragraph</p>";
  
    // question 7

    function scanArray(catArray){

    for (let i = 0; i < catArray.length; i++){
        console.log(catArray[i].name);
        }
    }


    const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
    ];

    scanArray(cats);

    // question 8

    function scanArray(catArray){

    let names = "";

    for (let i = 0; i < catArray.length; i++){
        names += `<h5>${catArray[i].name}</h5>`;
        }

    console.log(names);

    return names;
}

    // question 9

    resultsContainer.innerHTML = scanArray(cats);

  
   // Question 10
  
  function scandiv(catArray) {
    let divHTML = "";
  
    for (let i = 0; i < catArray.length; i++) {
      let ageValue = "Age unknown";
      if (catArray[i].age) {
        ageValue = catArray[i].age;
      }
  
      divHTML += `<div>
                    <h5>${catArray[i].name}</h5>
                    <p>${ageValue}</p>
                    </div>`;
    }
  
    return divHTML;
  }

resultsContainer.innerHTML = scandiv(cats);
