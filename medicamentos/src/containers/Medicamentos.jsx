import React from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';
import {PlusCircleIcon} from '@primer/octicons-react'

const Medicamentos = () => {
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="container-fluid">
                <br />
                <div className='row'>
                    <div className='col'>
                        <h1 className="title">Agregar Medicamento</h1>
                    </div>
                    <div className='col'>
                        <a href="/agregar"><PlusCircleIcon size={16} /></a>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <h1 className="title">Agregar Entrega de Medicamento</h1>
                    </div>
                    <div className='col'>
                        <a href="/agregarEntrega"><PlusCircleIcon size={16} /></a>
                    </div>
                </div>
                <br />
                <h1>Stock de Medicamentos</h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Medicamento</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Codigo</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">Ibuprofeno</td>
                        <td>1</td>
                        <td>89dsds</td>
                        <td><button type="submit" class="btn btn-success">Sumar</button></td>
                        <td><button type="submit" class="btn btn-danger">Caducar</button></td>
                        </tr>
                        <tr>
                        <td scope="row">Paracetamol</td>
                        <td>1</td>
                        <td>89dsddsds</td>
                        <td><button type="submit" class="btn btn-success">Sumar</button></td>
                        <td><button type="submit" class="btn btn-danger">Caducar</button></td>
                        </tr>
                        <tr>
                        <td scope="row">Clonazepam</td>
                        <td>1</td>
                        <td>89vfsdsds</td>
                        <td><button type="submit" class="btn btn-success">Sumar</button></td>
                        <td><button type="submit" class="btn btn-danger">Caducar</button></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <button type="submit" class="btn btn-success">Generar Informe Medicamentos</button>
                    </div>
                    <div className='col-6 col-sm-4'>
                    </div>
                </div>
                <h1>Preinscripciones</h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Medico</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Medicamento</th>
                        <th scope="col">Cantidad</th>
                        <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">Benjamin Pizarro</td>
                        <td>Valentin Riveros</td>
                        <td>Ibuprofeno</td>
                        <td>2</td>
                        <td><button type="submit" class="btn btn-success">Listo</button></td>
                        </tr>
                        <tr>
                        <td scope="row">Benjamin Pizarro</td>
                        <td>Fernanda Henriquez</td>
                        <td>Paracetamol</td>
                        <td>1</td>
                        <td><button type="submit" class="btn btn-success">Listo</button></td>
                        </tr>
                        <tr>
                        <td scope="row">Benjamin Pizarro</td>
                        <td>Ricardo Riveros</td>
                        <td>Ibuprofeno</td>
                        <td>1</td>
                        <td><button type="submit" class="btn btn-success">Listo</button></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <button type="submit" class="btn btn-success">Generar Informe Preinscripciones</button>
                    </div>
                    <div className='col-6 col-sm-4'>
                    </div>
                </div>
            </div>
            <br />
        </Layout>
    )
}

export default Medicamentos;