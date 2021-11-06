import { getAwsProfiles } from './get-aws-profiles';
import {Parameter} from './parameter';

export const profileParameter = new Parameter('profile', getAwsProfiles());
