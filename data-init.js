db.users.insertMany([
    {
        _id: "user1",
        name: "Alex Brieff",
        email: "alexb@example.com"
    },
    {
        _id: "user2",
        name: "Maria Silva",
        email: "marias@example.com"
    }
]);

db.addresses.insertMany([
    {
        _id: "address1",
        city: "Cidade X",
        street: "Rua A",
        state: "Estado Y",
        user: { $ref: "users", $id: "user1" }
    },
    {
        _id: "address2",
        city: "Cidade Y",
        street: "Rua B",
        state: "Estado Z",
        user: { $ref: "users", $id: "user1" }
    },
    {
        _id: "address3",
        city: "Cidade Z",
        street: "Rua C",
        state: "Estado W",
        user: { $ref: "users", $id: "user2" }
    }
]);

db.projects.insertMany([
    {
        _id: "project1",
        name: "Projeto Alpha",
        description: "Primeiro projeto de exemplo",
        users: [{ $ref: "users", $id: "user1" }, { $ref: "users", $id: "user2" }]
    },
    {
        _id: "project2",
        name: "Projeto Beta",
        description: "Segundo projeto de exemplo",
        users: [{ $ref: "users", $id: "user1" }]
    }
]);
