const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    await exec.exec('npm run lint');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
