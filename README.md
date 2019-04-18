# DEFRA Waste Permits Service Integration Tests

This package runs integrations tests for the
[DEFRA Waste Permits Service](https://github.com/DEFRA/waste-permits)

## Setup and Run

Requirements:

- [NodeJS](https://nodejs.org/en/) LTS (Dubnium/10.x, at time of writing)
- [Google Chrome](https://www.google.com/chrome/) Browser

### Setup:

```bash
# create env file
# see below for .env settings
cp .env.example .env
# install dependencies
npm i
# create a directory for test reports
mkdir features/reports
```

### Run test locally, in chrome:

Open two terminals (A and B)

In terminal A:
```bash
# navigate to your waste-permits directory
gulp
```

In terminal B:
```bash
# navigate to waste-permits-integration-tests directory
npm run test:firefox-desktop-test-smoke-dev
```

## Contributing to this project

If you have an idea you'd like to contribute please log an issue.

All contributions should be submitted via a pull request.

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN
GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products
and applications when using this information.

>Contains public sector information licensed under the Open
>Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller
of Her Majesty's Stationery Office (HMSO) to enable information
providers in the public sector to license the use and re-use of
their information under a common open licence.

It is designed to encourage use and re-use of information freely
and flexibly, with only a few conditions.
