const fs = require('fs');
const path = require('path');

const directory = './src';

const colorMapping = {
  // Gold -> Gold / Ochre
  '#c59b4b': '#D8993E',
  '#C59B4B': '#D8993E',
  '#d99a3d': '#D8993E',
  '#D99A3D': '#D8993E',
  
  // Terracotta -> Primary Terracotta
  '#a94f2f': '#A85030',
  '#A94F2F': '#A85030',
  
  // Backgrounds -> Background / Ivory
  '#fffdf9': '#FEFCF8',
  '#FFFDF9': '#FEFCF8',
  '#fffaf3': '#FEFCF8',
  '#FFFAF3': '#FEFCF8',
  
  // Dark text -> Deep Charcoal / Dark Brown-Charcoal
  '#3e2b1e': '#373535',
  '#3E2B1E': '#373535',
  
  // Medium text -> Warm Gray
  '#5f4d40': '#58524F',
  '#5F4D40': '#58524F',
  '#685645': '#58524F',
  '#685645': '#58524F',
  '#765a40': '#58524F',
  '#765A40': '#58524F',
  
  // Light text -> Soft Gray
  '#9a8068': '#B7AFA9',
  '#9A8068': '#B7AFA9'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(directory);

let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  for (const [oldColor, newColor] of Object.entries(colorMapping)) {
    // Replace all case-insensitive occurrences of the hex color
    // We use a regex to ensure we match the exact hex string, optionally allowing it to be followed by transparency like /50
    const regex = new RegExp(oldColor, 'gi');
    newContent = newContent.replace(regex, newColor);
  }
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changedFiles++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Finished updating ${changedFiles} files.`);
