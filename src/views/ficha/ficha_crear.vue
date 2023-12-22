<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">

                    <div class="row">
                               <div class="col-md-12">
                                  <div class="card">
                                        <div class="card-body">
                                         <h1 class="text-center">FICHA TECNICA</h1>
                                         <h1 class=""> INSTITUTO DE EDUCACION SUPERIOR TECNOLOGICO CHUPA</h1>
                                         <h2></h2>
                                        </div>
                                    </div>
                              </div>
                           </div>
                           <div class="row">
                               <div class="col-md-12">
                                  <div class="card">
                                        <div class="card-body">
                                            <h1 class="text-center">1:datos generales</h1>
                                        </div>
                                    </div>
                              </div>
                           </div>
                           <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> nº de ficha</label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> fecha de elaboracion</label>
                                <input v-model="ficha.DNI" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="mb-5">
                                <label class="form-label">descripcion de equipo</label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                
                                <input v-model="ficha.DNI" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="mb-5">
                               
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> MARCA</label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> TIPO</label>
                                <input v-model="ficha.DNI" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="mb-5">
                                <label class="form-label">CARACTERISTICAS RESALTANTES
                                </label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> N/D</label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> </label>
                                <input v-model="ficha.DNI" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="mb-5">
                                <label class="form-label">N/D</label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    
                    



















                   
                   
                    <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> LABORATORIO</label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> EDIFICION PABELLON</label>
                                <input v-model="ficha.DNI" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">NOMBRE DEL RESPONSABLE</label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">CARGO DEL RESPONSABLE</label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                               
                           </div>
                           <div class="row">
                               <div class="col-md-12">
                                  <div class="card">
                                        <div class="card-body">
                                            <h1 class="text-center">2.caracteristicas tecnicas</h1>
                                        </div>
                                    </div>
                              </div>
                           </div>
                           <div class="row">
                               <div class="">
                                  <div class="">
                                        <div class="">
                                            <h1 class="">hardwar perefiricos y otros</h1>
                                        </div>
                                    </div>
                              </div>
                           </div>
                           <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> DESCRIPCION</label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                       
                       
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">MARCA OTROS</label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> </label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                       
                       
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"></label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> </label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                       
                       
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"></label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> </label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                       
                       
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"></label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"> </label>
                                <input v-model="ficha.RNE" type="text" class="form-control">
                            </div>
                        </div>
                       
                       
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label"></label>
                                <input v-model="ficha.Profesion" type="text" class="form-control">
                            </div>
                        </div>
                    </div>



                           
                    
                    
                    
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/ficha_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs, query, where,addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    // name: 'scanner',
    data() {
        return {
            loadingDoc: false,
            ficha: {
                apellido: '',
                nombre: '',
                CMP: '',
                RNE: '',
                DNI: '',
                Profesion: '',
                domicilio: '',
                telefono:''
            },
        }
    },
    methods: {
        async guardar() {
            try {
                const q = query(collection(db, 'ficha'));
                const docRef = await addDoc(q, this.ficha);
                this.$router.push({ name: 'ficha_listar' })
            } catch (error) {
                console.log(error);
            } 
        },
    },
    created() {
    }
})
</script>