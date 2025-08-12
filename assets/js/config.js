// config.js
const API_BASE_URL = "https://myapp-backend-l2fx.onrender.com";

// Global access ke liye export karo (agar ES modules use ho rahe hain)
export default API_BASE_URL;

// Agar simple script tags use ho rahe hain to:
window.API_BASE_URL = API_BASE_URL;
