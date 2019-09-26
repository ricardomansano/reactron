# Reactron

Reactron é um projeto simples que integra o [React.js](https://reactjs.org/), o [Electron](https://electronjs.org/) e o [Material Design](https://material-ui.com/pt/) como interface.

## Features do projeto

+ Roteamento
+ Execução de comandos do SO com retorno das informações (stdout)
+ Construção de componentes customizados
+ Menus, Dialogs e outros componentes do Material UI
+ Consumo de Rest
+ Formulário básico
+ IO em disco (arquivos INI)

## Instalando

Você precisará do [NPM](https://nodejs.org/en/) instalado.
Siga os comandos abaixo:

```bash
# Clone o repositório
git clone https://github.com/ricardomansano/reactron.git reactron

# Acesse o diretório
cd reactron

# Instale as dependencias
npm install
```

## Execute o projeto à partir do comando

```bash
npm start
[ou]
npm run start
```

## Compilando para distribuição

```bash
npm run dist
```

O aplicativo será gerado na pasta `dist` de seu projeto.


## Como o Reactron trabalha com o React

O template compila os arquivos `*.js` (jsx) contidos na pasta `src` para arquivos JavaScript padrão para pasta `app`, incluindo também os arquivos `*.html` e `*.css`, juntamente com o arquivo `main.js` (inicializador do Electron). 

Ele então empacota o aplicativo utilizando o `gulp` através do `npm`.


<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/electron_sequence.png" alt="electron_sequence" border="0">
</p>

## Telas

<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/screen1.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/screen2.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/screen3.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/screen4.png" alt="electron_sequence" border="0">
</p>

## Licença

Esse projeto está sob a licença [MIT](https://www.opensource.org/licenses/mit-license.php)

Baseado no projeto [Electrate](https://github.com/mmick66/electrate) (sob licença: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR))
