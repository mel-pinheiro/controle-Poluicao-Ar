exports.getDados = (req, res) => {
    res.status(200).json({
        dados: [
            { local: "Centro", qualidade: "Boa", temperatura: 25, umidade: 60, data: "2025-04-23" }
        ]
    });
};

exports.createDados = (req, res) => {
    const novoDado = req.body;
    res.status(201).json({
        mensagem: "Novo dado criado com sucesso!",
        dado: novoDado
    });
};