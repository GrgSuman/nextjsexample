// utils/markdown.js
'use server'

import fs from 'fs';
import path from 'path';

export async function saveComponent(data,filename,componentName,jsxCode) {
  try {
    // Define the file path
    const filePath = path.join(process.cwd(), 'posts', 'components', `${filename}.md`);
    const filePathForComponent = path.join(process.cwd(), 'components', 'DemoComponents', `${componentName}.tsx`);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the file
    fs.writeFileSync(filePath, data, 'utf8');
    fs.writeFileSync(filePathForComponent, jsxCode, 'utf8');
    
    return { success: true, filename };
  } catch (error) {
    console.error('Error saving component:', error);
    return { success: false, error: error.message };
  }
}