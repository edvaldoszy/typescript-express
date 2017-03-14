import TransacaoCreditoHelper from "../helpers/TransacaoCreditoHelper";

export function cadastrar(request, response) {
    return response.status(200)
        .json({
            message: "Cadastrar usuario"
        });
}

export function listar(request, response) {
    return response.status(200)
        .json({
            message: "Listar usuarios"
        });
}

export function comprarCredito(request, response) {
    let helper = new TransacaoCreditoHelper();
    helper.iniciar();

    return response.status(200)
        .json({
            message: "Comprar credito"
        });
}
