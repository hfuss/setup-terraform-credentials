import * as core from '@actions/core'
import {templateTerraformCredentials} from './terraform'

async function run(): Promise<void> {
  try {
    await templateTerraformCredentials()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
