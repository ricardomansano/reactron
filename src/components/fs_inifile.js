import React from 'react';

import AppButton from './app-button'

var fs = require('fs') // Enable access to the File System:  https://nodejs.org/api/fs.html
var ini = require('ini') // INI manipulation tools
var fName = "./reactron.ini"

export default class FS_Inifile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            iniContent: "",
            filesOpened: ""
        }

        // If Ini doesn't exist, create
        fs.exists(fName, (exists) => {
            if (!exists) {
                fs.writeFileSync(fName, "[files]")
                console.log(fName + " criado com sucesso!")
            }
        });
    }

    selectFiles = (event) => {
        var input = event.target;
        var files = input.files;

        // "Scan" selected files
        let cFiles = ""
        for (var i = 0; i < files.length; i++) {
            cFiles += files[i].path + '\n'
        }

        // Update state with selected files
        this.setState({ filesOpened: cFiles })
    }

    fileSystem_Ini = () => {
        // Open reacton.ini file at the same level as the executable 
        var fIni = ini.parse(fs.readFileSync(fName, 'utf-8'))

        // Insert lines in INI 
        fIni.Escopo = 'Scope variable '
        fIni.files.file1 = "file1.png"
        fIni.files.file2 = "file2.png"
        fIni.files.file3 = "file3.png"

        // Delete file2
        delete fIni.files.file2

        // Save file INI
        fs.writeFileSync(fName, ini.stringify(fIni))

        // Update state with the contents of the ini file
        this.setState({ iniContent: ini.stringify(fIni) })
    }

    render() {
        return (
            <div>
                <p align="right"><b>source:</b> fs_inifile.js </p>

                <h2>File Manipulation / Ini Files...</h2>
                <p>In this example we are going to manipulate local files based on INI files.</p>

                {/* Selecao de arquivos */}
                <input
                    accept="all/*.*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={() => { this.selectFiles(event) }} />
                <label htmlFor="raised-button-file">
                    <AppButton component="span">
                        Select files
                    </AppButton>
                </label>
                <h3>Selected files</h3>
                <pre>{this.state.filesOpened}</pre>

                {/* Manipulacao de arquivos INI */}
                <AppButton onClick={() => { this.fileSystem_Ini() }}>Create/Open INI file </AppButton>
                <h3>INI File Contents </h3>
                <pre>{this.state.iniContent}</pre>

            </div>
        )
    }
}
