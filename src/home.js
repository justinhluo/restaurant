function renderHomePage() {
    const content = document.getElementById("content");
    const title = document.createElement("div");
    title.textContent = "Taqeria Familiar";
    content.appendChild(title);

    const about = document.createElement("div");
    about.textContent = "Our Story"
    about.classList.add("sub-heading");
    content.appendChild(about);
    const description = document.createElement("div");
    description.textContent = "This place is great. We make tacos and burritos, so good! \nSince 1997, we've been serving the East Bay. \nCome give us a try, you won't be dissapointed!";
    description.style.whiteSpace = "pre-line";
    description.style.textAlign = "center";
    content.appendChild(description);
    const hours = document.createElement("div");
    hours.textContent = "Hours";
    hours.classList.add("sub-heading");
    
    const hoursList = document.createElement("ul");
    const hoursArray = [
        "Monday: 8am - 6pm",
        "Tuesday: 8am - 8pm",
        "Wednesday: 8am - 8pm",
        "Thursday: 8am - 8pm",
        "Friday: 8am - 8pm",
        "Saturday: 8am - 6pm",
        "Sunday: Closed"
    ];

  hoursArray.forEach(day => {
    const li = document.createElement("li");
    li.textContent = day;
    hoursList.appendChild(li);
  });

  
  content.appendChild(hours);
  content.appendChild(hoursList);
 
}

export {renderHomePage};