let app;

document.addEventListener('DOMContentLoaded', () => {
    "use strict"

    app = new Vue({
        el: '#lista-tareas',
        data: {
            tituloNuevaTarea: '',
            mensajeError: '',
            tareas: [
                { titulo: 'Aprender js', completada: true, editar: false },
                { titulo: 'Aprender vue', completada: false, editar: false }
            ]
        },
        methods: {
            agregarTarea: function () {
                if (this.tituloNuevaTarea != '') {
                    this.tareas.push({
                        titulo: this.tituloNuevaTarea,
                        completada: false,
                        editar: false
                    });
                    this.tituloNuevaTarea = '';
                    this.mensajeError = '';
                }
                else {
                    this.mensajeError = 'El titulo de la tarea no puede ser vacío'
                }
            },
            eliminarTarea: function (index) {
                this.tareas.splice(index, 1);
                // this.tareas[index] = null;
            },
            editarTarea: function (index) {
                let tarea = this.tareas[index];
                tarea.aux = tarea.titulo;
                tarea.editar = true;
            },
            guardarTarea: function (index) {
                let tarea = this.tareas[index];
                tarea.editar = false;
                delete tarea.aux;
            },
            restablecerTarea: function (index) {
                let tarea = this.tareas[index];
                tarea.titulo = tarea.aux;
                tarea.editar = false;
                delete tarea.aux;
            },
            shuffleTareas: function () {
                let array = this.tareas;
                let currentIndex = array.length;
                while (currentIndex !== 0) {
                    let randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
                    let aux = array[currentIndex];
                    array.splice(currentIndex, 1, array[randomIndex]);
                    array.splice(randomIndex, 1, aux);
                    // no funciona por temas de implementación de js
                    // array[currentIndex] = array[randomIndex];
                    // array[randomIndex] = aux;
                }
            }
        }
    });

});


