import WebSocket from 'ws';
import mongoose from 'mongoose';
import Patient from '../models/Patient';

const connections = new Set<WebSocket>();

const setupWebSocket = (server: any) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    connections.add(ws);
    console.log('New WebSocket connection');

    // Send initial patient data
    Patient.find().then(patients => {
      ws.send(JSON.stringify({ type: 'INITIAL_DATA', patients }));
    });

    ws.on('close', () => {
      connections.delete(ws);
      console.log('WebSocket connection closed');
    });
  });

  // MongoDB change stream for real-time updates
  const patientChangeStream = mongoose.connection.collection('patients').watch();
  patientChangeStream.on('change', (change) => {
    const message = JSON.stringify({
      type: 'PATIENT_UPDATE',
      operationType: change.operationType,
      document: change.fullDocument
    });
    connections.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
};

export { setupWebSocket, connections };