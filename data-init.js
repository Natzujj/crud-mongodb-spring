// Selecionando o banco de dados
use crud-spring-mongo;

// Inserindo usuários
db.users.insertMany([
  {
    _id: ObjectId(),
    name: "Gabriel Souza",
    email: "gabriel@example.com",
    address: [],
    projects: []
  },
  {
    _id: ObjectId(),
    name: "Maria Oliveira",
    email: "maria@example.com",
    address: [],
    projects: []
  }
]);

// Inserindo endereços
db.addresses.insertMany([
  {
    _id: ObjectId(),
    street: "street A",
    city: "city X",
    state: "state Y",
    user: db.users.findOne({ name: "Gabriel Souza" })._id
  },
  {
    _id: ObjectId(),
    street: "street B",
    city: "city Y",
    state: "state Z",
    user: db.users.findOne({ name: "Maria Oliveira" })._id
  }
]);

// Inserindo projetos
db.projects.insertMany([
  {
    _id: ObjectId(),
    name: "Projeto Alpha",
    description: "Primeiro projeto de exemplo",
    users: [
      db.users.findOne({ name: "Gabriel Souza" })._id,
      db.users.findOne({ name: "Maria Oliveira" })._id
    ]
  },
  {
    _id: ObjectId(),
    name: "Projeto Beta",
    description: "Segundo projeto de exemplo",
    users: [
      db.users.findOne({ name: "Gabriel Souza" })._id
    ]
  }
]);
