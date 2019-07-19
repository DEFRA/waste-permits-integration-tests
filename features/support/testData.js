const { cloneDeep } = require('lodash')

const data = Object.freeze({
  email: 'save.application@defra.test.gov.uk',

  contact: {
    firstName: 'TestJames',
    lastName: 'TestBond',
    agentCompany: 'TestAgent Company',
    telephone: '007 007 007 007',
    email: 'Testjames.bond@defra.test.gov.uk'
  },

  charity: {
    charityName: 'Test Charity',
    charityNumber: '1234567'
  },

  individual: {
    firstName: 'TestMoney',
    lastName: 'TestPenny',
    dob: { day: 2, month: 8, year: 1999 },
    email: 'testindividual@defra.test.gov.uk',
    telephone: '002 007 002 007',
    buildingNameOrNumber: 'Horizon House',
    addressLine1: 'Deanery Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    convictions: 'This is a test conviction for an individual',
    bankruptcy: 'This is a test bankruptcy for an individual'
  },

  soleTrader: {
    firstName: 'TestSoul',
    lastName: 'TestMan',
    dob: { day: 2, month: 8, year: 1999 },
    tradingName: 'TestSoul Trader',
    email: 'testsole.trader@defra.test.gov.uk',
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
    tradingName: 'TestTrading Name',
    directors: [
      {
        dob: { day: 10, month: 12, year: 1976 },
        email: 'testdirector0@defra.test.gov.uk'
      }
    ],
    convictions: 'This is a test conviction for a limited company',
    bankruptcy: 'This is a test bankruptcy for a limited company'
  },

  limitedLiabilityPartnership: {
    number: 'OC353216',
    buildingNameOrNumber: 'TestSite House',
    addressLine1: 'Site Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    name: 'JV ENERGEN LLP',
    tradingName: 'Trading Name',
    directors: [
      {
        dob: { day: 10, month: 12, year: 1976 },
        email: 'testdesignated.member@defra.test.gov.uk'
      }
    ],
    convictions: 'This is a test conviction for a limited liability partnership',
    bankruptcy: 'This is a test bankruptcy for a limited liability partnership'
  },

  publicBody: {
    firstName: 'TestJoe',
    lastName: 'TestPublic',
    email: 'testjoe.public@defra.test.gov.uk',
    jobTitle: 'TestChairman',
    tradingName: 'TestPublic body Name',
    buildingNameOrNumber: 'Council Chambers',
    addressLine1: 'Authority Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    name: 'This is a test public body'
  },

  partnership: {
    tradingName: 'TestTrading Name',
    partners: [
      {
        firstName: 'TestFirst',
        lastName: 'TestPartner',
        jobTitle: 'TestFirst Officer',
        dob: { day: 1, month: 2, year: 1990 },
        email: 'testfirst.partner@defra.test.gov.uk',
        telephone: '001 001 001 001',
        buildingNameOrNumber: 'Horizon House',
        addressLine1: 'Deanery Rd',
        townOrCity: 'Bristol',
        postcode: 'BS1 5AH',
        convictions: 'This is a test conviction for the first partner',
        bankruptcy: 'This is a test bankruptcy for the first partner'
      },
      {
        firstName: 'TestSecond',
        lastName: 'TestPartner',
        jobTitle: 'TestSecond Officer',
        dob: { day: 2, month: 3, year: 1991 },
        email: 'testsecond.partner@defra.test.gov.uk',
        telephone: '002 002 002 002',
        buildingNameOrNumber: 'Horizon House',
        addressLine1: 'Deanery Rd',
        townOrCity: 'Bristol',
        postcode: 'BS1 5AH',
        convictions: 'This is a test conviction for the second partner',
        bankruptcy: 'This is a test bankruptcy for the second partner'
      },
      {
        firstName: 'TestThird',
        lastName: 'TestPartner',
        jobTitle: 'TestThird Officer',
        dob: { day: 3, month: 4, year: 1992 },
        email: 'testthird.partner@defra.test.gov.uk',
        telephone: '003 003 003 003',
        buildingNameOrNumber: 'Horizon House',
        addressLine1: 'Deanery Rd',
        townOrCity: 'Bristol',
        postcode: 'BS1 5AH',
        convictions: 'This is a test conviction for the third partner',
        bankruptcy: 'This is a test bankruptcy for the third partner'
      }
    ]
  },

  site: {
    name: 'Test Our Test Site',
    gridReference: 'ST 58132 72695',
    buildingNameOrNumber: 'Site House',
    addressLine1: 'Site Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH'
  },

  invoice: {
    buildingNameOrNumber: 'Test Invoice House',
    addressLine1: 'Test Invoice Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    firstName: 'Hugo',
    lastName: 'Drax',
    telephone: '001 002 003 004',
    email: 'testhugo.drax@defra.test.gov.uk'
  },

  miningWaste: {
    miningWasteWeight: '1000,000',
    miningWastePlan: 'Water based'
  },

  aqmaDetails: {
    name: 'Test My AQMA',
    localAuthority: 'Bristol City Council',
    nitrogenDioxideLevel: '5'
  },

  paymentDetails: {
    validCard: {
      cardNumber: '4242424242424242',
      expiryMonth: '01',
      expiryYear: '35',
      name: 'MRS TEST TEST TEST',
      cvc: '123',
      addrLineOne: '01',
      city: 'Bristol',
      postcode: 'bs5 1ah',
      email: 'amruta.bendre@defra.net'
    },
    validBacs: {
      date: { day: 2, month: 3, year: 1991 },
      amount: 1000.00,
      reference: 'TestMy Payment Ref'
    }
  },

  confidentialityNeeds: 'Test confidentiality needs'
})

// Always return a clone so that original data is never corrupted
module.exports = cloneDeep(data)
