import * as path from 'path'
import {promises as fs} from 'fs'

export async function templateTerraformCredentials(): Promise<void> {
  const tfToken: string | undefined = process.env.TERRAFORM_TOKEN
  if (!tfToken) {
    throw new Error('TERRFORM_TOKEN not provided as env var')
  }

  const homeDir: string | undefined = process.env.HOME
  if (!homeDir) {
    throw new Error('HOME not provided as env var')
  }

  const tfFileContents = `credentials "app.terraform.io" {
  token = "${tfToken}"
}`

  const tfFilePath: string = path.join(homeDir, '.terraformrc')

  await fs.writeFile(tfFilePath, tfFileContents)
}
