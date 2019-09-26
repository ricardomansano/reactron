import React from 'react';

import AppButton from './app-button'

var fs = require('fs') // Habilita acesso ao File System: https://nodejs.org/api/fs.html
var ini = require('ini') // Ferramentas de manipulacao de INIs
var fName = "./reactron.ini"

export default class FS_Inifile extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            iniContent: "",
            filesOpened: ""
        }

        // Se Ini nao existir, cria
        fs.exists(fName, (exists) => {
            if (!exists){
                fs.writeFileSync(fName, "[files]")
                console.log(fName + " criado com sucesso!")
            }
        });
    }

    selectFiles = (event) => {
        var input = event.target;
        var files = input.files;

        // "Varre" os arquivos selecionados
        let cFiles = ""
        for (var i = 0; i < files.length; i++) {
            cFiles += files[i].path + '\n'
        }

        // Atualiza state com os arquivos selecionados
        this.setState({ filesOpened: cFiles})
    }

    fileSystem_Ini = () => {
        // Abre arquivo reactron.ini no mesmo nivel do executavel
        var fIni = ini.parse(fs.readFileSync(fName, 'utf-8'))

        // Insere linhas no INI
        fIni.Escopo = 'variavel de Escopo' // Uma variavel sem Tag pode ficar no escopo
        fIni.files.file1="file1.png"
        fIni.files.file2="file2.png"
        fIni.files.file3="file3.png"

        // Deleta file2
        delete fIni.files.file2

        // Salva arquivo INI
        fs.writeFileSync(fName, ini.stringify(fIni))

        // Atualiza state com o conteudo do arquivo ini
        this.setState({ iniContent: ini.stringify(fIni)})
    }

    render(){
        return ( 
            <div>
                <p align="right"><b>source:</b> fs_inifile.js </p>

                <h2>Manipulação de arquivos / Ini Files...</h2>
                <p>Neste exemplo vamos manipular arquivos locais nos baseando em arquivos INI.</p>

                {/* Selecao de arquivos */}
                <input
                    accept="all/*.*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={() => {this.selectFiles(event)}}/>
                <label htmlFor="raised-button-file">
                    <AppButton component="span">
                        Seleciona arquivos
                    </AppButton>
                </label> 
                <h3>Arquivos selecionados</h3>
                <pre>{this.state.filesOpened}</pre>

                {/* Manipulacao de arquivos INI */}
                <AppButton onClick={() => {this.fileSystem_Ini()}}>Cria/Abre arquivo INI</AppButton>
                <h3>Conteúdo do Arquivo INI</h3>
                <pre>{this.state.iniContent}</pre>

             </div>
        )
    }
 }
