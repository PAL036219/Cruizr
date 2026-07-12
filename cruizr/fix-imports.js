import fs from 'fs';
import path from 'path';

function getRelativePath(fromPath, toPath) {
    let rel = path.relative(path.dirname(fromPath), toPath);
    if (!rel.startsWith('.')) rel = './' + rel;
    return rel.replace(/\\/g, '/');
}

function processDirectory(dir, srcRoot) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath, srcRoot);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            content = content.replace(/['"]@\/(.*?)['"]/g, (match, p1) => {
                modified = true;
                const absoluteTarget = path.join(srcRoot, p1);
                let rel = getRelativePath(fullPath, absoluteTarget);
                return `"${rel}"`;
            });

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Fixed imports in ${fullPath}`);
            }
        }
    }
}

const srcRoot = path.join(process.cwd(), 'src');
processDirectory(srcRoot, srcRoot);
