const { sequelize, Usuario } = require("./db/models");

(async () => {
    try {
        await sequelize.sync({ force:true });
        await sequelize.authenticate();
            console.log("conexão bem sucedida");

    //usuario
    const pedro = await Usuario.create({
        nome: "Pedro",
        email: "pedro@gmail.com",
        senha: "123456"

    });
    console.log("usuario criado com sucesso")

    //endereco
    await pedro.createEndereco({
        rua: "rua 01",
        numero: 123
    })

    //projeto
    await pedro.createProjeto({
        nome: "projeto 1",
        quantidadeHoras: 10
    });
    console.log("usuario criado com sucesso")


    } catch (error) {
        console.error("erro", error);
    } finally {
        sequelize.close();
    }
})();
