const getAllUser = async () =>{
    let response = await fetch("https://js-f1380-default-rtdb.firebaseio.com/users/.json");
let data = await response.json ();
console.log(data)
return data;
};

const printAllusers = async () => {
    let users = await getAllUser();
    console.log(users);

};
printAllusers();

/*crear entradas*/
const creatUser = async (userObject) => {
    let response = await fetch("https://js-f1380-default-rtdb.firebaseio.com/users/.json",
    {
    method: "POST",
    body: JSON.stringify(userObject),
    }
)
let data = await response.json();
console.log(date);
return data;

};

/*actualizar datos*/

const updateUser = async (userRef, newData) => {
    let response = await fetch("https://js-f1380-default-rtdb.firebaseio.com/users/.json", 
        {
        method:"PUT", 
        body:JSON.stringify(newData),
}
    )
    let data = await response.json();
    console.log(date);

}

/*eliminarr datos*/