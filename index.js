//Imports de los módulos
//fs y path
const fs = require('fs');
const path = require('path');

const getUsers = async () => {
  //Leer el archivo
  try {
    const data = await JSON.parse(
      fs.readFileSync('users.json', { encoding: 'utf8' })
    );
    //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (userObj) => {
  //leer el archivo
  //convertir el contenido en formato JSON en un objeto JS
  try {
    const data = await JSON.parse(
      fs.readFileSync('users.json', { encoding: 'utf8' })
    );
    //agregar el usuario en el arreglo
    // const newArray = [...data, userObj];
    data.push(userObj);

    //sobreescribir el arreglo en el archivo
    fs.writeFileSync('users.json', JSON.stringify(data), (error) => {
      if (!error) {
        console.log('Se ha escrito en el archivo');
      }
    });
    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
    //que acabas de agregar en el arreglo
    return userObj;
  } catch (error) {
    console.log(error);
  }
};

const clearUsers = async () => {
  //Vaciar el arreglo y sobreescribir el archivo
  try {
    await fs.writeFileSync('users.json', JSON.stringify([]), (error) => {
      if (!error) {
        console.log('Se ha escrito en el archivo');
      }
    });
    //Si el proceso se realizó correctamente tendrás que regresar true
    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  addUser,
  clearUsers,
};
