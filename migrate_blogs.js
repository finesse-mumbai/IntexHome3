const fs = require('fs');
const path = require('path');

const sourceDir = 'E:\\ARMAN D DRIVE\\BangladeshInNextJS\\isa-bd\\app\\blogs';
const targetDir = 'e:\\ARMAN D DRIVE\\IntexHomePage\\IntexHome3\\components\\blogs';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const dirs = fs.readdirSync(sourceDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

dirs.forEach(dirName => {
  const pagePath = path.join(sourceDir, dirName, 'page.jsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace "use client";
    content = content.replace(/"use client";\n?/, '');
    
    // Replace imports
    content = content.replace(/import Link from "next\/link";\n?/, '');
    content = content.replace(/import Script from "next\/script";\n?/, '');
    
    // Convert <Link href="..."> to <a href="...">
    content = content.replace(/<Link\s+href="\/blogs"/g, '<a href="#blogs"');
    content = content.replace(/<Link\s+href="\/enquiry-form"/g, '<a href="#enquiry-form"');
    content = content.replace(/<\/Link>/g, '</a>');
    
    // Remove next/script tags
    content = content.replace(/<Script[\s\S]*?\/>/g, '');
    
    // Fix initGSAP
    content = content.replace(/const initGSAP = \(\) => \{/g, 'const initGSAP = () => {\n    // @ts-ignore');
    content = content.replace(/const gsap = window\.gsap;/g, '// @ts-ignore\n      const gsap = window.gsap;');
    content = content.replace(/const ScrollTrigger = window\.ScrollTrigger;/g, '// @ts-ignore\n      const ScrollTrigger = window.ScrollTrigger;');
    content = content.replace(/reveals\.forEach\(\(el\) => \{/g, '// @ts-ignore\n      reveals.forEach((el) => {');
    
    // Fix useEffect setTimeout for initGSAP
    content = content.replace(/useEffect\(\(\) => \{ initGSAP\(\); \}, \[\]\);/g, 'useEffect(() => {\n    setTimeout(initGSAP, 100);\n  }, []);');

    // Change export default function Name() to avoid conflicts if there are any
    // Wait, let's keep the original function name and save as .tsx
    
    const componentName = `Blog${toPascalCase(dirName)}Page`;
    
    // Rename component function just in case
    content = content.replace(/export default function \w+\(\)/, `export default function ${componentName}()`);

    // Fix containerRef
    content = content.replace(/const containerRef = useRef\(null\);/, 'const containerRef = useRef<HTMLElement>(null);');

    const targetPath = path.join(targetDir, `${componentName}.tsx`);
    fs.writeFileSync(targetPath, content);
    console.log(`Migrated ${dirName} to ${componentName}.tsx`);
  }
});

// Create index.ts to export all
const exportsCode = dirs.map(dirName => {
  const componentName = `Blog${toPascalCase(dirName)}Page`;
  return `export { default as ${componentName} } from './${componentName}';`;
}).join('\n');

fs.writeFileSync(path.join(targetDir, 'index.ts'), exportsCode);
console.log('Created index.ts');
