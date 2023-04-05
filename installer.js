const {MSICreator} = require('electron-wix-msi')
const path = require ('path')

const appDir = path.resolve(__dirname, './MailerElectron-win32-x64')
const outAppDir = path.resolve(__dirname, './windows_msi_installer')

const msiCreator = new MSICreator({
    appDirectory: appDir,
    outputDirectory: outAppDir, 

    description: 'This is a mailer service using MySQL',
    exe: 'MailerElectron', 
    name: "Mailer Desktop Services",
    manufacturer: "Nikolay N.",
    version: '1.0.0',
    appIconPath: path.resolve(__dirname, './favicon.ico'),
    ui: {
        chooseDirectory: true
    }
})

msiCreator.create().then(function(){
    msiCreator.compile(); 
})