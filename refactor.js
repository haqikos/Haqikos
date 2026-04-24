const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'pages');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file === '_app.jsx' || !file.endsWith('.jsx')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove imports (both single and double quotes, with or without semi-colons)
  content = content.replace(/import\s+Header\s+from\s+["'][^"']+Header["'];?\n?/g, '');
  content = content.replace(/import\s+Footer\s+from\s+["'][^"']+Footer["'];?\n?/g, '');
  
  // Remove component tags (can have spaces)
  content = content.replace(/\s*<Header\s*\/>\n?/g, '');
  content = content.replace(/\s*<Footer\s*\/>\n?/g, '');
  
  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('Refactoring complete. Removed Header and Footer from all pages.');
