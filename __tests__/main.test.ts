import {templateTerraformCredentials} from '../src/terraform'

test('runs', async () => {
  await templateTerraformCredentials()
});
