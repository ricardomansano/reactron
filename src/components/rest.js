import React from 'react';
var http = require('http')

export default class Rest extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            return_rest: "",
            status: "",
            headers: ""
        }

        this.callRest()
    }

    callRest = () => {
        var options = {
            host: 'localhost',
            port: 3333,
            path: '/url?name=MANSANO%20S/A&year=2019',
            method: 'GET'
        }

        const req = http.request(options, (res) => {
            this.setState({status: res.statusCode})
            this.setState({headers: JSON.stringify(res.headers)})
            
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                this.setState({return_rest: chunk})
            });
        }).end();
        
        req.on('error', (e) => {
            this.setState({return_rest: e.message})
        });        
    }

    render(){
        return ( 
            <div>
            <p align="right"><b>source:</b> rest.js </p>
            <h2>Consumindo Rest</h2>
            <p>Na pasta sample_rest tem um programa simples de Rest server</p>
            <p>Inicie com o comando: <b>node index.js</b></p>

            <p><b>Retorno do REST serão os parâmetros de envio:</b></p>
            <ul>
                <li><b>Retorno</b>: {this.state.return_rest}</li>
                <li><b>Status</b>: {this.state.status}</li>
                <li><b>Headers</b>: {this.state.headers}</li>
            </ul>
            </div>
        )
    }
 }