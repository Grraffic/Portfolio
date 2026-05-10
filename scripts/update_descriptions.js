const http = require('http');

const updates = [
  {
    id: '9ec9fed0-a8f1-44e7-b88e-62285d92091a',
    description: 'A 2nd-year academic project — a visually engaging food website showcasing a restaurant menu and online ordering experience. Built as a front-end exercise to strengthen HTML, CSS, and JavaScript fundamentals.'
  },
  {
    id: 'eabfa824-9716-47bc-95ad-b5fda13593c0',
    description: "A 2nd-year academic project — a coffee shop website for Danie's Coffee featuring a product showcase, menu display, and a clean, modern UI. Designed to practice front-end development skills with HTML and CSS."
  },
  {
    id: 'e9ed6dcf-1e5c-4cb6-a211-25cf74496e17',
    description: 'A 3rd-year academic project — a full-featured appointment booking and management system built using the MERN stack. Allows clients to schedule, view, and manage appointments while providing admins a dashboard to oversee bookings.'
  },
  {
    id: '4d63f3c7-dcc3-499a-9434-2a10baccf88b',
    description: 'A personal project — a self-service kiosk web application designed for in-store ordering. Features an interactive product catalog, cart management, and a streamlined checkout flow to simulate a real-world kiosk experience.'
  },
  {
    id: 'b9d8039c-d012-4964-9b7a-db8e29f296c0',
    description: 'A capstone project — a real-time order tracking system for a business, allowing customers to monitor their order status from placement to delivery. Built with a full-stack architecture using React, Node.js, Express, and Supabase.'
  },
  {
    id: 'c42f3f53-a170-4edc-8a22-210d040f178a',
    description: 'An academic project exploring enterprise-level software architecture patterns and system design. Demonstrates how large-scale applications are structured, integrated, and maintained using modern frameworks and best practices.'
  }
];

const update = (id, data) => new Promise((resolve, reject) => {
  const body = JSON.stringify(data);
  const req = http.request(`http://localhost:5001/api/projects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
  }, (res) => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      const result = JSON.parse(d);
      console.log(`✓ Updated: ${result.data?.title}`);
      resolve(result);
    });
  });
  req.on('error', reject);
  req.write(body);
  req.end();
});

(async () => {
  for (const u of updates) {
    await update(u.id, { description: u.description });
  }
  console.log('\nAll descriptions updated!');
})();
