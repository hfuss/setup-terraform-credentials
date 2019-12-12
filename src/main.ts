import * as core from '@actions/core';
import { templateTerraformCredentials } from './terraform';

async function run() {
  try {
    await templateTerraformCredentials()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run();
