//modulo Luciano Andres
import pdf from "html-pdf";
import prepararPedido from "./Plantilla.js";
import {PATH_FOR_REPORTS} from "../../config/config.js";


export function createPdfGenerator() {
    return {
        //genera la plantilla de un pedido
        generarPdf: (pedido) => {
            return new Promise((resolve, reject) => {
                pdf.create(prepararPedido().generarPlanillaPedido(pedido))
                    .toFile(
                        `${PATH_FOR_REPORTS}/Pedido${new Date().toString().slice(0,9)}.pdf`,
                        function(err) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(`${PATH_FOR_REPORTS}/Pedido${new Date().toString().slice(0,9)}.pdf`);
                            }
                        }
                    );
            })
        },
        //enviar cambio de divisa 
        generarDivisa: (dato) => {
            return new Promise((resolve, reject) => {
                pdf.create(prepararPedido().generarPlanillaDato(dato))
                    .toFile(
                        //cambiar la ruta segun corresponda
                        `${PATH_FOR_REPORTS}/${dato.name}.pdf`,
                        function(err) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(`${PATH_FOR_REPORTS}/${dato.name}.pdf`);
                            }
                        }
                    );
            })
        }
    }
}