import { chromium, firefox, webkit } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getDirectoryStructure = (directoryPath, excludeDirs = []) => {
    const files = fs.readdirSync(directoryPath);
    const structure = {};

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory() && !excludeDirs.includes(file)) {
            structure[file] = getDirectoryStructure(filePath, excludeDirs);
        } else {
            structure[file] = 'file';
        }
    });

    return structure;
};

const displayDirectoryStructure = (directoryPath, excludeDirs = [], indent = '') => {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file, index) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory() && !excludeDirs.includes(file)) {
            console.log(`${indent}├── ${file}/`);
            const nestedIndent = index === files.length - 1 ? indent + '    ' : indent + '│   ';
            displayDirectoryStructure(filePath, excludeDirs, nestedIndent);
        } else {
            console.log(`${indent}└── ${file}`);
        }
    });
};

const displayProjectInfo = async () => {
    console.log('--- Project Information ---');

    // Operating System
    console.log('Operating System:', process.platform);

    // Node.js Version
    console.log('Node.js Version:', process.version);

    // Playwright Browser Versions
    console.log('--- Playwright Browser Versions ---');
    const browserVersionPromises = [
        chromium.launch().then((browser) => browser.version()),
        firefox.launch().then((browser) => browser.version()),
        webkit.launch().then((browser) => browser.version())
    ];

    try {
        const [chromiumVersion, firefoxVersion, webkitVersion] = await Promise.all(browserVersionPromises);
        console.log('Chromium:', chromiumVersion);
        console.log('Firefox:', firefoxVersion);
        console.log('WebKit:', webkitVersion);
    } catch (error) {
        console.error('Failed to retrieve browser versions:', error);
    }

    // Project Structure
    console.log('--- Project Structure ---');
    const projectRoot = path.resolve('.');
    const excludedDirs = ['node_modules', '.idea', 'external', 'libraries', 'scratches and consoles', '.git','docs', 'test-results', 'site',  'allure-results'
    ];
    console.log(projectRoot);
    displayDirectoryStructure(projectRoot, excludedDirs);
};

// Utilisation de await pour attendre l'exécution de displayProjectInfo
await displayProjectInfo();
