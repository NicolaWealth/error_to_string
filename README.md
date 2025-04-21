![Tests Passing](https://github.com/NicolaWealth/error_to_string/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Ferror_to_string%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `error_to_string` package provides functionality to convert a given error to a string.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `error_to_string` package with npm:

`npm install @nicolawealth/error_to_string`

# Usage
This package simplifies error handling in a variety of contexts, including but not limited to:
* Logging errors
* Displaying error messages
* Error reporting
* Debugging
* etc.

# Interface
The package exports the function `errorToString(e)` where `e` is the error provided. 
If `e` is an instance of type `Error` then the function will return a string in the format `errorName: message` where `errorName` and `message` correspond to the `name` and `message` properties of the `Error` object. 
If `e` is not an instance of type `Error` then the function will return the contents of `e` as a string.

# Testing
Tests can be found in `error_to_string.test.ts` located in `error_to_string/src` and should be run with sinon, mocha and nyc.
