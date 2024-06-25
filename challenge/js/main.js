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
  cardDiv.className = "col-md-4 mb-3";

  const card = document.createElement("div");
  card.className = "card";
  card.style.width = "18rem";

  const img = document.createElement("img");
  img.src = user.picSource;
  img.className = "card-img-top";
  img.alt = user.name;
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = user.name;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = user.aboutYou;
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  const listGroup = document.createElement("ul");
  listGroup.className = "list-group list-group-flush";

  const locationItem = document.createElement("li");
  locationItem.className = "list-group-item";
  locationItem.textContent = user.location;
  listGroup.appendChild(locationItem);

  if (user.github) {
    const githubItem = document.createElement("li");
    githubItem.className = "list-group-item";
    githubItem.textContent = `GitHub: ${user.github}`;
    listGroup.appendChild(githubItem);
  }

  if (user.linkedin) {
    const linkedinItem = document.createElement("li");
    linkedinItem.className = "list-group-item";
    linkedinItem.textContent = `LinkedIn: ${user.linkedin}`;
    listGroup.appendChild(linkedinItem);
  }

  if (user.twitter) {
    const twitterItem = document.createElement("li");
    twitterItem.className = "list-group-item";
    twitterItem.textContent = `Twitter: ${user.twitter}`;
    listGroup.appendChild(twitterItem);
  }

  if (user.instagram) {
    const instagramItem = document.createElement("li");
    instagramItem.className = "list-group-item";
    instagramItem.textContent = `Instagram: ${user.instagram}`;
    listGroup.appendChild(instagramItem);
  }

  card.appendChild(listGroup);
  cardDiv.appendChild(card);
  cardsRow.appendChild(cardDiv);
};