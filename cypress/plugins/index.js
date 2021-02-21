/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const axios = require('axios')
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    createAccount( {email, password }) {
      return signup(email, password)
    }
    
  })
}

function signup(email, motdepasse) {
  return new Promise((resolve) => {
    axios
      .post('https://api.demoblaze.com/signup', {
        'username': email,
        'password': motdepasse
      }).then(res => {
        if(res.data === "") {
          resolve('User created')
        } 
        else if (res.data.errorMessage != undefined && res.data.errorMessage === "This user already exist.") {
          resolve('User already exists')
        }
      })
  })
}
