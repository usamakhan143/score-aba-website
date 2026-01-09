#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Score ABA Development Environment');
console.log('📧 SMTP Integration Active with Gmail');
console.log('');

// Start backend server
console.log('Starting backend server on port 3001...');
const backend = spawn('node', ['server.js'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

// Give backend time to start
setTimeout(() => {
  console.log('Starting frontend development server...');
  const frontend = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  frontend.on('close', (code) => {
    console.log(`Frontend server exited with code ${code}`);
    backend.kill();
  });
}, 2000);

backend.on('close', (code) => {
  console.log(`Backend server exited with code ${code}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down servers...');
  backend.kill();
  process.exit(0);
});
