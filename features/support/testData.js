const {cloneDeep} = require('lodash')

const data = Object.freeze({
  email: 'save.application@defra.test.gov.uk',

  contact: {
    firstName: 'James',
    lastName: 'Bond',
    agentCompany: 'Agent Company',
    telephone: '007 007 007 007',
    email: 'james.bond@defra.test.gov.uk'
  },

  individual: {
    firstName: 'Money',
    lastName: 'Penny',
    dob: {day: 2, month: 8, year: 1999},
    email: 'individual@defra.test.gov.uk',
    telephone: '002 007 002 007',
    buildingNameOrNumber: 'Horizon House',
    addressLine1: 'Deanery Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    convictions: 'This is a test conviction for an individual',
    bankruptcy: 'This is a test bankruptcy for an individual'
  },

  soleTrader: {
    firstName: 'Soul',
    lastName: 'Man',
    dob: {day: 2, month: 8, year: 1999},
    tradingName: 'Soul Trader',
    email: 'sole.trader@defra.test.gov.uk',
    telephone: '002107202307',
    buildingNameOrNumber: 'Horizon House',
    addressLine1: 'Deanery Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    convictions: 'This is a test conviction for an individual',
    bankruptcy: 'This is a test bankruptcy for an individual'
  },

  limitedCompany: {
    number: '06388542',
    name: 'HSBC LIMITED',
    tradingName: 'Trading Name',
    directors: [
      {
        dob: {day: 10, month: 12, year: 1976},
        email: 'director0@defra.test.gov.uk'
      }
    ],
    convictions: 'This is a test conviction for a limited company',
    bankruptcy: 'This is a test bankruptcy for a limited company'
  },

  limitedLiabilityPartnership: {
    number: 'OC353216',
    buildingNameOrNumber: 'Site House',
    addressLine1: 'Site Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    name: 'JV ENERGEN LLP',
    tradingName: 'Trading Name',
    directors: [
      {
        dob: {day: 10, month: 12, year: 1976},
        email: 'designated.member@defra.test.gov.uk'
      }
    ],
    convictions: 'This is a test conviction for a limited liability partnership',
    bankruptcy: 'This is a test bankruptcy for a limited liability partnership'
  },

  site: {
    name: 'Our Test Site',
    gridReference: 'ST 58132 72695',
    buildingNameOrNumber: 'Site House',
    addressLine1: 'Site Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH'
  },

  invoice: {
    buildingNameOrNumber: 'Invoice House',
    addressLine1: 'Invoice Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH'
  },

  confidentialityNeeds: 'Test confidentiality needs'
})

// Always return a clone so that original data is never corrupted
module.exports = cloneDeep(data)
