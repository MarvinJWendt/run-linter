const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    await exec.exec('npm run lint');
    await exec.exec('git commit -m "Linted file"')
    await exec.exec('git push')
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
