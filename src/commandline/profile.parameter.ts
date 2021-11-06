import { readFileSync } from 'fs';
import { resolve } from 'path';
import {Parameter} from './parameter';
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

export const profile = new Parameter('profile', getAwsProfiles());
