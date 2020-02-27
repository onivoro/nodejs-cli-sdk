const { readFileSync } = require('fs');
const { resolve } = require('path');
const Parameter = require('./parameter');
const PROFILES = /\[.*\]/g;

function getAwsProfiles() {
  try {
    const credPath = resolve(process.env.HOME, '.aws/credentials');
    return readFileSync(credPath, 'utf8')
      .match(PROFILES)
      .map(p => p.replace('[', '').replace(']', ''));
  } catch (_e) {
    return null;
  }
}

module.exports = new Parameter('profile', getAwsProfiles());
