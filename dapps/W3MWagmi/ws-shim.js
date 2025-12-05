// WebSocket shim for React Native - uses native WebSocket
'use strict';

// React Native has WebSocket built-in globally
const WebSocket = global.WebSocket;

// Export WebSocket as the default and also expose it as a class
module.exports = WebSocket;
module.exports.WebSocket = WebSocket;
module.exports.default = WebSocket;

// Stub out server-side only features
module.exports.Server = function() {
  throw new Error('WebSocket.Server is not available in React Native');
};
module.exports.createWebSocketStream = function() {
  throw new Error('createWebSocketStream is not available in React Native');
};
module.exports.Receiver = function() {
  throw new Error('WebSocket.Receiver is not available in React Native');
};
module.exports.Sender = function() {
  throw new Error('WebSocket.Sender is not available in React Native');
};
