// Função para retornar estatísticas
export const getEstatisticas = (req, res) => {
    const estatisticas = {
        totalRegistros: 100,
        qualidadeMedia: "Boa",
        ultimaAtualizacao: "2025-04-23"
    };

    res.status(200).json(estatisticas);
};

// Função para deletar um dado pelo ID
export const deleteDado = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ mensagem: "ID não fornecido. Por favor, insira um ID válido." });
    }

    res.status(200).json({ mensagem: `Dado com ID ${id} foi removido com sucesso!` });
};

// Funções existentes
export const getDados = (req, res) => {
    res.status(200).json({
        dados: [
            { local: "Centro", qualidade: "Boa", temperatura: 25, umidade: 60, data: "2025-04-23" }
        ]
    });
};

export const createDados = (req, res) => {
    const novoDado = req.body;
    res.status(201).json({ mensagem: "Novo dado registrado com sucesso!", dado: novoDado });
};