import { IEstacionamiento, ILectorDeTarjeta } from "./interfaces";


    class Estacionamiento extends IEstacionamiento{
        declare lector: any
        verificarCodigoTarjeta(codigoTarjeta: string, lectorConTarjeta: ILectorDeTarjeta): void {
            if (codigoTarjeta === "123"){
                this.acceso.grabarUltimoAcceso(codigoTarjeta)
            }
            if (codigoTarjeta === "456"){
                this.acceso.grabarUltimoAcceso(codigoTarjeta)
            }
            if (codigoTarjeta === "456"){
                this.barrera.elevar()
            }
            if (codigoTarjeta === "456"){
                lectorConTarjeta.mostrarMensajeExito()
            }
            if (codigoTarjeta === "789"){
                lectorConTarjeta.mostrarMensajeError()
            }
        }
    }

    export default Estacionamiento