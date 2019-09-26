import React from 'react';
const { shell } = require('electron')

export default function AppAbout(props) {
  const appName = require('../../package.json').name
  const appDescription = require('../../package.json').description
  const appVersion = require('../../package.json').version
  const appLicense = require('../../package.json').license
  const appDepends = require('../../package.json').dependencies

  function showDepends(){
    let depends = JSON.stringify(appDepends)
    depends = depends.substr(1, depends.length-2)
    return depends.replace(/\,/g, "\n")
  }

  function openLink(link){
    shell.openExternal(link)
  }

  return (
    <div>
      <p align="right"><b>source:</b> app-about.js</p>
      <h2>Sobre</h2>
      <b>Desenvolvido por Ricardo Mansano.</b><br/><br/>

      <b>Nome:</b> {appName} - {appDescription}<br/>
      <b>Versão:</b> {appVersion}<br/>
      <b>LIcença:</b> {appLicense}<br/><br/>

      <b>Dependências do projeto:</b><br/>
      <pre>
        {showDepends()}
      </pre>
    </div>
  );
}