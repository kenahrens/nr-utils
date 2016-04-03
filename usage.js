'use strict';

var request = require('request')

// Read the config from environment:'
var config = {
  ACCOUNT_ID: process.env.NEWRELIC_ACCOUNT_ID,
  REST_API_KEY: process.env.NEWRELIC_REST_API_KEY
}

// Usage parameters
var usageOpts = {
  'method': 'GET',
  'uri': 'https://api.newrelic.com/v2/applications.json',
  'headers': {'X-Api-Key': config.REST_API_KEY},
  'json': true
};
