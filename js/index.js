//agregar mascota
const agegarMascota = document.querySelector('#agegarMascota');
const modalAgregarMascota = document.querySelector('#modal__agregar__mascota');
const btnCloseAgregarMascota = document.querySelector('#btn-cerrar-modal-agregar-mascota');

agegarMascota.addEventListener('click', () =>{
    modalAgregarMascota.showModal();
});

btnCloseAgregarMascota.addEventListener('click', () =>{
    modalAgregarMascota.close();
});
//fin agregar mascota

//asignar dueño
const asignarDueno = document.querySelector('#asignarDueno');
const modalAsignarDueno = document.querySelector('#modal__asignar__dueno');
const btnCloseAsignarDueno = document.querySelector('#btn-cerrar-modal-asignar-dueno');

asignarDueno.addEventListener('click', () => {
    modalAsignarDueno.showModal();
});

btnCloseAsignarDueno.addEventListener('click', () =>{
    modalAsignarDueno.close();
});
//fin asignar dueño

//eliminar dueño
const eliminarDueno = document.querySelector('#eliminarDueno');
const modalEliminarDueno = document.querySelector('#modal__eliminar__dueno');
const btnCloseEliminarDueno = document.querySelector('#btn-cerrar-modal-eliminar-dueno');

eliminarDueno.addEventListener('click', () => {
    modalEliminarDueno.showModal();
});

btnCloseEliminarDueno.addEventListener('click', () => {
    modalEliminarDueno.close();
});
//fin eliminar dueño

//eliminar mascota
const eliminarMascota = document.querySelector('#eliminarMascota');
const modalEliminarMascota = document.querySelector('#modal__eliminar__mascota');
const btnCloseEliminarMascota = document.querySelector('#btn-cerrar-modal-eliminar-mascota');

eliminarMascota.addEventListener('click', ()=>{
    modalEliminarMascota.showModal();
});

btnCloseEliminarMascota.addEventListener('click', () => {
    modalEliminarMascota.close();
});

//fin eliminar mascota
