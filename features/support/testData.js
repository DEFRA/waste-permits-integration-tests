const { cloneDeep } = require('lodash')

const data = Object.freeze({
  email: 'save.application@defra.UserTest.gov.uk',

  contact: {
    firstName: 'UserTestJames',
    lastName: 'UserTestBond',
    agentCompany: 'UserTestAgent Company',
    telephone: '007 007 007 007',
    email: 'UserTestjames.bond@defra.UserTest.gov.uk'
  },

  charity: {
    charityName: 'UserTest Charity',
    charityNumber: '1234567'
  },

  individual: {
    firstName: 'UserTestMoney',
    lastName: 'UserTestPenny',
    dob: { day: 2, month: 8, year: 1999 },
    email: 'UserTestindividual@defra.UserTest.gov.uk',
    telephone: '002 007 002 007',
    buildingNameOrNumber: 'Horizon House',
    addressLine1: 'Deanery Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    convictions: 'This is a UserTest conviction for an individual',
    bankruptcy: 'This is a UserTest bankruptcy for an individual'
  },

  soleTrader: {
    firstName: 'UserTestSoul',
    lastName: 'UserTestMan',
    dob: { day: 2, month: 8, year: 1999 },
    tradingName: 'UserTestSoul Trader',
    email: 'UserTestsole.trader@defra.UserTest.gov.uk',
    telephone: '002107202307',
    buildingNameOrNumber: 'Horizon House',
    addressLine1: 'Deanery Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    convictions: 'This is a UserTest conviction for an individual',
    bankruptcy: 'This is a UserTest bankruptcy for an individual'
  },

  limitedCompany: {
    number: 'SC627120',
    name: 'USER TESTING LIMITED',
    tradingName: 'UserTestTrading Name',
    directors: [
      {
        dob: { day: 10, month: 9, year: 1977 },
        email: 'UserTestdirector0@defra.UserTest.gov.uk'
      }
    ],
    convictions: 'This is a UserTest conviction for a limited company',
    bankruptcy: 'This is a UserTest bankruptcy for a limited company'
  },

  limitedLiabilityPartnership: {
    number: 'OC353216',
    buildingNameOrNumber: 'UserTestSite House',
    addressLine1: 'Site Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    name: 'JV ENERGEN LLP',
    tradingName: 'Trading Name',
    directors: [
      {
        dob: { day: 10, month: 12, year: 1976 },
        email: 'UserTestdesignated.member@defra.UserTest.gov.uk'
      }
    ],
    convictions: 'This is a UserTest conviction for a limited liability partnership',
    bankruptcy: 'This is a UserTest bankruptcy for a limited liability partnership'
  },

  publicBody: {
    firstName: 'UserTestJoe',
    lastName: 'UserTestPublic',
    email: 'UserTestjoe.public@defra.UserTest.gov.uk',
    jobTitle: 'UserTestChairman',
    tradingName: 'UserTestPublic body Name',
    buildingNameOrNumber: 'Council Chambers',
    addressLine1: 'Authority Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    name: 'This is a UserTest public body'
  },

  partnership: {
    tradingName: 'UserTestTrading Name',
    partners: [
      {
        firstName: 'UserTestFirst',
        lastName: 'UserTestPartner',
        jobTitle: 'UserTestFirst Officer',
        dob: { day: 1, month: 2, year: 1990 },
        email: 'UserTestfirst.partner@defra.UserTest.gov.uk',
        telephone: '001 001 001 001',
        buildingNameOrNumber: 'Horizon House',
        addressLine1: 'Deanery Rd',
        townOrCity: 'Bristol',
        postcode: 'BS1 5AH',
        convictions: 'This is a UserTest conviction for the first partner',
        bankruptcy: 'This is a UserTest bankruptcy for the first partner'
      },
      {
        firstName: 'UserTestSecond',
        lastName: 'UserTestPartner',
        jobTitle: 'UserTestSecond Officer',
        dob: { day: 2, month: 3, year: 1991 },
        email: 'UserTestsecond.partner@defra.UserTest.gov.uk',
        telephone: '002 002 002 002',
        buildingNameOrNumber: 'Horizon House',
        addressLine1: 'Deanery Rd',
        townOrCity: 'Bristol',
        postcode: 'BS1 5AH',
        convictions: 'This is a UserTest conviction for the second partner',
        bankruptcy: 'This is a UserTest bankruptcy for the second partner'
      },
      {
        firstName: 'UserTestThird',
        lastName: 'UserTestPartner',
        jobTitle: 'UserTestThird Officer',
        dob: { day: 3, month: 4, year: 1992 },
        email: 'UserTestthird.partner@defra.UserTest.gov.uk',
        telephone: '003 003 003 003',
        buildingNameOrNumber: 'Horizon House',
        addressLine1: 'Deanery Rd',
        townOrCity: 'Bristol',
        postcode: 'BS1 5AH',
        convictions: 'This is a UserTest conviction for the third partner',
        bankruptcy: 'This is a UserTest bankruptcy for the third partner'
      }
    ]
  },

  site: {
    name: 'UserTest Our UserTest Site',
    gridReference: 'ST 58132 72695',
    buildingNameOrNumber: 'Site House',
    addressLine1: 'Site Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH'
  },

  invoice: {
    buildingNameOrNumber: 'UserTest Invoice House',
    addressLine1: 'UserTest Invoice Rd',
    townOrCity: 'Bristol',
    postcode: 'BS1 5AH',
    firstName: 'Hugo',
    lastName: 'Drax',
    telephone: '001 002 003 004',
    email: 'UserTesthugo.drax@defra.UserTest.gov.uk'
  },

  miningWaste: {
    miningWasteWeight: '1000000',
    miningWastePlan: 'Water based'
  },

  aqmaDetails: {
    name: 'UserTest My AQMA',
    localAuthority: 'Bristol City Council',
    nitrogenDioxideLevel: '5'
  },

  paymentDetails: {
    validCard: {
      cardNumber: '4242424242424242',
      expiryMonth: '01',
      expiryYear: '35',
      name: 'MRS UserTest UserTest UserTest',
      cvc: '123',
      addrLineOne: '01',
      city: 'Bristol',
      postcode: 'bs5 1ah',
      email: 'amruta.bendre@defra.net'
    },
    validBacs: {
      date: { day: 2, month: 3, year: 1991 },
      amount: 1000.00,
      reference: 'UserTestMy Payment Ref'
    }
  },
  validPreAppNumber: 'AAA/WE1111AA/A111',
  invalidPreAppNumber: 'AAA/WE1111AA/A1112',
  confidentialityNeeds: 'UserTest confidentiality needs',
  harbour: 'UserTest Harbour',
  sewer: 'UserTest Sewer',
  fisheries: 'UserTest fisheries'
})

// Always return a clone so that original data is never corrupted
module.exports = cloneDeep(data)
