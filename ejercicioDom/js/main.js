let users = [
    {
      name: "Juan",
      lastname: "Pérez",
      age: 25,
      hobbies: ["leer", "correr"],
      country: "México",
    },
    {
      name: "Ana",
      lastname: "García",
      age: 30,
      hobbies: ["viajar", "pintar", "nadar"],
      country: "Argentina",
    },
    {
      name: "Carlos",
      lastname: "López",
      age: 45,
      hobbies: ["cantar"],
      country: "Chile",
    },
    {
      name: "María",
      lastname: "Fernández",
      age: 22,
      hobbies: ["leer", "correr", "bailar"],
      country: "Colombia",
    },
    {
      name: "Luis",
      lastname: "Gómez",
      age: 35,
      hobbies: ["jugar fútbol", "viajar"],
      country: "México",
    },
    {
      name: "Sofía",
      lastname: "Rodríguez",
      age: 28,
      hobbies: ["cocinar", "leer"],
      country: "Chile",
    },
    {
      name: "José",
      lastname: "Sánchez",
      age: 40,
      hobbies: ["nadar", "escribir"],
      country: "Argentina",
    },
    {
      name: "Laura",
      lastname: "Martínez",
      age: 26,
      hobbies: ["pintar", "cantar"],
      country: "México",
    },
    {
      name: "Miguel",
      lastname: "Hernández",
      age: 33,
      hobbies: ["correr", "jugar fútbol"],
      country: "Colombia",
    },
    {
      name: "Lucía",
      lastname: "Torres",
      age: 29,
      hobbies: ["viajar", "bailar"],
      country: "Chile",
    },
  ];
  
  const printFullNames = (usersArray) => {
  const getCompleteUsersName = document.getElementById("completeUsersName");
  
    usersArray.forEach(user => {
      const CompleteName = document.createElement("li");
      CompleteName.textContent = `${user.name} ${user.lastname}`;
      getCompleteUsersName.appendChild(CompleteName);
    });
  };
    printFullNames(users);
  
  