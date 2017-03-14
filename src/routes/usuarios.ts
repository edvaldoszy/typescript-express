import * as AutenticacaoMiddleware from "../middlewares/AutenticacaoMiddleware";
import * as UsuarioController from "../controllers/UsuarioController";

export = function(app) {
    app.route("/api/usuarios")
        .get(
            AutenticacaoMiddleware.validar,
            UsuarioController.listar
        )
        .post(
            AutenticacaoMiddleware.validar,
            UsuarioController.cadastrar
        );
    
    app.route("/api/usuarios/comprar-credito")
        .post(
            AutenticacaoMiddleware.validar,
            UsuarioController.comprarCredito
        );
}