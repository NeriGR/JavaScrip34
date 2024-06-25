let users = [];

const addUser = () => {
  const name = document.getElementById("name").value;
  const picSource = document.getElementById("picSource").value;
  const location = document.getElementById("location").value;
  const aboutYou = document.getElementById("aboutYou").value;
  const github = document.getElementById("github").value;
  const linkedin = document.getElementById("linkedin").value;
  const twitter = document.getElementById("twitter").value;
  const instagram = document.getElementById("instagram").value;

  if (name && picSource && location && aboutYou) {
    let user = {
      name: name,
      picSource: picSource,
      location: location,
      aboutYou: aboutYou,
    };

    if (github) user.github = github;
    if (linkedin) user.linkedin = linkedin;
    if (twitter) user.twitter = twitter;
    if (instagram) user.instagram = instagram;

    users.push(user);
    createCard(user);
    console.log(users);
  } else {
    alert("Please fill in all required fields.");
  }
};

const createCard = (user) => {
  const cardsRow = document.getElementById("cardsRow");

  const cardDiv = document.createElement("div");
  cardDiv.className = "col-12 col-md-6 mb-3";

  const card = document.createElement("div");
  card.className =
    "card bg-dark bg-gradient text-white d-flex flex-column m-3 p-3";

  const img = document.createElement("img");
  img.src = user.picSource;
  img.className = "card-img-top rounded-circle mx-auto d-block";
  img.alt = user.name;
  img.style.width = "50%";
  img.style.objectFit = "cover";
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column justify-content-between";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title text-center";
  cardTitle.textContent = user.name;
  cardBody.appendChild(cardTitle);

  const locationItem = document.createElement("h6");
  locationItem.className = "list-group-item text-location text-center";
  locationItem.textContent = user.location;
  cardBody.appendChild(locationItem);

  const cardText = document.createElement("p");
  cardText.className = "card-text text-center text-about";
  cardText.textContent = `"${user.aboutYou}"`;
  cardBody.appendChild(cardText);

  const socialLinks = document.createElement("div");
  socialLinks.className = "d-flex flex-wrap justify-content-center mt-3";

  if (user.github) {
    const githubLink = document.createElement("a");
    githubLink.href = user.github;
    githubLink.className = "btn btn-secondary m-1 social-media";
    githubLink.textContent = "GitHub";
    socialLinks.appendChild(githubLink);
  }

  if (user.linkedin) {
    const linkedinLink = document.createElement("a");
    linkedinLink.href = user.linkedin;
    linkedinLink.className = "btn btn-secondary m-1 social-media";
    linkedinLink.textContent = "LinkedIn";
    socialLinks.appendChild(linkedinLink);
  }

  if (user.twitter) {
    const twitterLink = document.createElement("a");
    twitterLink.href = user.twitter;
    twitterLink.className = "btn btn-secondary m-1 social-media";
    twitterLink.textContent = "Twitter";
    socialLinks.appendChild(twitterLink);
  }

  if (user.instagram) {
    const instagramLink = document.createElement("a");
    instagramLink.href = user.instagram;
    instagramLink.className = "btn btn-secondary m-1 social-media";
    instagramLink.textContent = "Instagram";
    socialLinks.appendChild(instagramLink);
  }

  cardBody.appendChild(socialLinks);
  card.appendChild(cardBody);

  cardDiv.appendChild(card);
  cardsRow.appendChild(cardDiv);
};