import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';
import path from 'path';

const dir = process.cwd();

async function run() {
  console.log('Initializing git repository in', dir);
  await git.init({ fs, dir });

  console.log('Adding files...');
  
  async function addDirectory(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.relative(dir, fullPath).replace(/\\/g, '/');

      if (
        relPath.startsWith('node_modules') ||
        relPath.startsWith('dist') ||
        relPath.startsWith('.git') ||
        relPath.endsWith('.log')
      ) {
        continue;
      }

      if (entry.isDirectory()) {
        await addDirectory(fullPath);
      } else {
        await git.add({ fs, dir, filepath: relPath });
      }
    }
  }

  await addDirectory(dir);

  console.log('Committing changes...');
  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Keshgir Gnaneshwar',
      email: 'kesgirgnaneshwar025@gmail.com',
    },
    message: 'feat: modern developer portfolio website for Keshgir Gnaneshwar',
  });
  console.log('Committed successfully with SHA:', sha);
}

run().catch(err => {
  console.error('Error during git operation:', err);
  process.exit(1);
});
