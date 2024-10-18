const Cliente = require("./models/cliente");
const Direccion = require("./models/direccion");
const Empleado = require("./models/empleado");
const Orden = require("./models/orden");

const findByIdClienteAndOrdenesLazy = async (id) => {
    const cliente = await Cliente.findOne({
        where: {
            id
        }
    });
    console.log(cliente.toJSON());
    const ordenes = await cliente.getOrdens();
    const ordenesJson = ordenes.map((orden) => {
        return orden.toJSON();
    });
    console.log(ordenesJson);
}

const findByIdClienteAndOrdenesEager = async (id) => {
    const cliente = await Cliente.findOne({
        where: {
            id
        },
        include: Orden
    });
    console.log(cliente.toJSON());
}

const findAllEmpleadosAndOrdenesLazy = async () => {
    const empleados = await Empleado.findAll();
    const empleadosJson = empleados.map((empleado) => {
        return empleado.toJSON();
    });
    console.log(empleadosJson);
    empleados.forEach(async (empleado) => {
        const ordenesEmpleados = await empleado.getOrdens(); 
        console.log(ordenesEmpleados);
    });
}

const findAllEmpleadosAndOrdenesEager = async () => {
    const empleados = await Empleado.findAll({
        include: Orden
    });
    const empleadosJson = empleados.map((empleado) => {
        return empleado.toJSON();
    });
    console.log(empleadosJson);
    
}

findAllEmpleadosAndOrdenesEager();