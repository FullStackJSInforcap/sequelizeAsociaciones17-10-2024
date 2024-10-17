const Cliente = require("./models/cliente");
const Direccion = require("./models/direccion");
const Orden = require("./models/orden");


const jugandoAsociacionesPerezosa = async () => {
    const cliente = await Cliente.findOne({
        where: {
            id: 1
        }
    });
    console.log(cliente.dataValues);
    const direccion = await cliente.getDireccion();
    console.log(direccion.dataValues);
}

const jugandoAsociacionesAnsiosa = async () => {
    const cliente = await Cliente.findOne({
        where: {
            id: 1
        },
        include: Direccion
    });
    console.log(cliente.toJSON());
}

const jugandoAsociacionesPeresozaOneToMany = async () => {
    const cliente = await Cliente.findOne({
        where: {
            id: 1
        }
    });
    console.log(cliente.toJSON());
    const ordenes = await cliente.getOrdens();
    const ordenesJson = ordenes.map((orden) => {
        return orden.toJSON();
    });
    console.log(ordenesJson);
}

const jugandoAsociacionesAnsiosaOneToMany = async () => {
    const cliente = await Cliente.findOne({
        where: {
            id: 1
        },
        include: Orden
    });
    console.log(cliente.toJSON());   
}

jugandoAsociacionesAnsiosaOneToMany();