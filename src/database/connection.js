import sqlite3 from "sqlite3";



// estamos utilizando  o verbose para registrar tudo que esta sendo feito no sqilite no console
sqlite3.verbose();

let table1;
let table2;
let table3;
let selecionarTabela1;
let selecionarTabela2;
let selecionarTabela3;
let insert


// criando banco de dados

// CREATE DATABASE  criamos o banco de dados e um arquivo para referenciar edit: arquivo invisivel
const db = new sqlite3.Database("./animal.db", (error) => {
    if (error) {
        return console.log(error.message);
    }

});


// CREATE TABLE Abaixo estamos criando 3 tabelas e armazenando o código sql em uma variavel

table1 = `CREATE TABLE animalsExtinct(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
breed VARCHAR(255),
gender VARCHAR(255),
age INT

);`;

db.run(table1)

table2 = `CREATE TABLE Volunteer(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255),
    age INT,
    active BOOL
    
    );`;

db.run(table2);

table3 = `CREATE TABLE AnimalsSaved(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        breed VARCHAR(255),
        gender VARCHAR(255),
        age INT
        
        );`;

db.run(table3);


// aqui embaixo estamos inserindo  o animal instinto e criando  uma função que será responsavel por criar o usuario

function insertAnimalExtinct(name, breed, gender, age) {
    insert = `INSERT INTO animalsExtinct (name, breed, gender, age) 
     VALUES (?,?,?,?)`

    db.run(insert, [name, breed, gender, age], (error) => {
        if (error) {
            return console.log(error.message);
        }
    })

}

insertAnimalExtinct('Carlim', 'Caramelo', 'Macho', 4)




function insertVolunter(name, email, senha, age, active) {
    insert = `INSERT INTO Volunteer (name ,email,senha,age,active) 
     VALUES (?,?,?,?,?)`

    db.run(insert, [name, email, senha, age, active], (error) => {
        if (error) {
            return console.log(error.message);
        }
    })

}
insertVolunter('Jonas', 'Jonas@gmail.com', 'iamincredible', 20, true)









function insertAnimalSaved(name, breed, gender, age) {
    insert = `INSERT INTO AnimalsSaved (name,breed,gender,age) 
     VALUES (?,?,?,?)`

    db.run(insert, [name, breed, gender, age], (error) => {
        if (error) {
            return console.log(error.message);
        }
    })

}

insertAnimalSaved('Alex', 'Pastor ALemão', 'femea', 2)





// aqui embaixo estamos consultando as 3 tabelas que criamos e os dados que inserimos nela.

selecionarTabela1 = `SELECT * FROM animalsExtinct`

db.all(selecionarTabela1, [], (error, rows) => {
    if (error) {
        return console.log(error.message)
    }
    rows.forEach((row) => {
        console.log(row)
    })
});



selecionarTabela2 = `SELECT * FROM Volunteer`

db.all(selecionarTabela2, [], (error, rows) => {
    if (error) {
        return console.log(error.message)
    }
    rows.forEach((row) => {
        console.log(row)
    })
});


selecionarTabela3 = `SELECT * FROM AnimalsSaved`

db.all(selecionarTabela3, [], (error, rows) => {
    if (error) {
        return console.log(error.message)
    }
    rows.forEach((row) => {
        console.log(row)
    })
});    