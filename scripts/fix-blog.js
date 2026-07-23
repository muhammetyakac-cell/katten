const fs = require('fs');
const path = 'src/lib/blog-data.ts';
let content = fs.readFileSync(path, 'utf8');
// Replace literal \n (backslash followed by n) with actual newline
content = content.replace(/\},\\n\s+\{/g, '},\n  {');
fs.writeFileSync(path, content);
console.log('Fixed');
