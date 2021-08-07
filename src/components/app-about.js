import React from 'react';
const { shell } = require('electron')

export default function AppAbout(props) {
  const appName = require('../../package.json').name
  const appDescription = require('../../package.json').description
  const appVersion = require('../../package.json').version
  const appLicense = require('../../package.json').license
  const appDepends = require('../../package.json').dependencies

  function showDepends() {
    let depends = JSON.stringify(appDepends)
    depends = depends.substr(1, depends.length - 2)
    return depends.replace(/\,/g, "\n")
  }

  function openLink(link) {
    shell.openExternal(link)
  }

  return (
    <div>
      <p align="right"><b>source:</b> app-about.js</p>
      <h2>About</h2>
      <b>Developed by Ricardo Mansano.</b><br /><br />
      <b>Name:</b> {appName} - {appDescription}<br />
      <b>Version:</b> {appVersion}<br />
      <b>License:</b> {appLicense}<br /><br />
      <b>Project dependencies:</b><br />
      <pre>
        {showDepends()}
      </pre>
    </div>
  );
}