const http = require('http');

const getProjects = () => new Promise((resolve, reject) => {
  http.get('http://localhost:5001/api/projects', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => resolve(JSON.parse(data).data));
  }).on('error', reject);
});

const updateProject = (id, data) => new Promise((resolve, reject) => {
  const req = http.request(`http://localhost:5001/api/projects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  }, (res) => {
    let respData = '';
    res.on('data', chunk => respData += chunk);
    res.on('end', () => resolve(JSON.parse(respData)));
  });
  req.on('error', reject);
  req.write(JSON.stringify(data));
  req.end();
});

async function main() {
  const projects = await getProjects();
  
  for (const p of projects) {
    let stack = [...p.tech_stack];
    let changed = false;
    
    if (p.name === 'appointment-system' || p.title.toLowerCase().includes('appointment')) {
      stack = ['MongoDB', 'Express', 'React', 'Node.js'];
      changed = true;
    }
    
    if (p.name === 'capstone-order-tracking-fe' || p.title.toLowerCase().includes('capstone')) {
      if (!stack.find(s => s.toLowerCase().includes('tailwind'))) {
        stack.push('Tailwind CSS');
        changed = true;
      }
    }
    
    if (p.name === 'danie-s-coffee' || p.title.toLowerCase().includes('danie')) {
      if (!stack.find(s => s.toLowerCase() === 'html')) stack.push('HTML');
      if (!stack.find(s => s.toLowerCase() === 'css')) stack.push('CSS');
      changed = true;
    }
    
    if (p.name === 'enterprise-architecture' || p.title.toLowerCase().includes('enterprise')) {
      if (!stack.find(s => s.toLowerCase() === 'react')) stack.push('React');
      if (!stack.find(s => s.toLowerCase().includes('tailwind'))) stack.push('Tailwind CSS');
      changed = true;
    }
    
    if (changed) {
      console.log(`Updating ${p.title} to:`, stack);
      await updateProject(p.id, { tech_stack: stack });
    }
  }
  console.log('Done!');
}

main().catch(console.error);
