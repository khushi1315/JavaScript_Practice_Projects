//! 1.select the target element
const appContainer=document.getElementById("app");
const generateBtn=document.getElementById("generateBtn");

//! 2.Create new HTML elements(document.createElement())
function createProfileCard(){
    //create the profile card container
    const profileCard=document.createElement("div");
    profileCard.className="profile-card"
    console.log(profileCard);
    //create an image element for the profile card
    const profileImage=document.createElement("img");
    // add img to created img element
    profileImage.src="https://cdn.pixabay.com/photo/2025/05/14/16/13/girl-9599953_1280.png";
    //create the heading element
    const profileCardName=document.createElement("h3"
    );
    profileCardName.textContent="Khushi";
    //create a paragraph element for the desc
    const profileDescription=document.createElement("p");
    profileDescription.innerHTML=
    "A passionate web developer";
    console.log(profileDescription);
    //! 3.Add content to the element created(innerHTML/textContent)
//! 4.Add classes or ids if needed //add any attribute
profileCard.appendChild(profileImage);
profileCard.appendChild(profileCardName);
profileCard.appendChild(profileDescription);

//append profile card to the container
//!append the DOM
appContainer.appendChild(profileCard);

}


//Add event listener
generateBtn.addEventListener('click',createProfileCard);


