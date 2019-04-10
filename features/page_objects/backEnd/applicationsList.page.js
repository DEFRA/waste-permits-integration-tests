const CRMPageObject = require('./base/CRMPageObject').CRMPageObject
const config = require('../../../config')
const AdalNode = require('adal-node')
const request = require('request')
const chai = require('chai')

class ApplicationsListPage extends CRMPageObject {
  async retrieveandValidateApplication (applicationNumber = this.data.applicationNumber, token) {
    console.log('Application number:- ' + applicationNumber)

    const val = Math.floor(Math.pow(10, 12 - 1) + Math.random() * (Math.pow(10, 12) - Math.pow(10, 12 - 1) - 1))
    const options = {
      method: 'GET',
      url: config.sendUrl,
      qs:
        {
          '$filter': 'contains(defra_name,\'' + applicationNumber + '\')'
        },
      headers:
        {
          'postman-token': config.postmantoken + val,
          'cache-control': 'no-cache',
          authorization: 'Bearer ' + token,
          'content-type': 'application/json'
        },
      json: true
    }

    const responseRecieved = await this.recieveResponse(options)

    chai.expect(JSON.stringify(responseRecieved.body['value'])).to.contain(applicationNumber)
  }

  recieveResponse (options) {
    return new Promise(function (resolve, reject) {
      // Do async job
      request(options, function (err, resp, body) {
        if (err) {
          reject(err)
        } else {
          resolve(resp, body)
        }
      })
    })
  }

  async getToken () {
    // wait for 1 hour
    await this.sleep()
    return new Promise((resolve, reject) => {
      // Make the token request
      const authorityHostUrl = config.authorityHostUrl
      const tenant = config.tenant
      const authorityUrl = authorityHostUrl + '/' + tenant
      const clientId = config.clientID // Application Id of app registered under AAD.
      const clientSecret = config.clientSecret
      const resource = config.resource

      const AuthenticationContext = AdalNode.AuthenticationContext
      const context = new AuthenticationContext(authorityUrl)

      return context.acquireTokenWithClientCredentials(resource, clientId, clientSecret, function (err, tokenResponse) {
        if (err) {
          reject(err)
        } else {
          const token = tokenResponse.accessToken
          if (token) {
            resolve(token)
          } else {
            const error = new Error(`Error obtaining Active Directory auth token: ${JSON.stringify(tokenResponse)}`)
            reject(error)
          }
        }
      })
    })
  }
}

module.exports = ApplicationsListPage
