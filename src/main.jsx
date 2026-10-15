import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("App Render Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d0208] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-[#c89b3c]">
            <img src="/assets/images/house-of-tea-logo.jpg" alt="House of Tea" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold mb-2">House of Tea</h1>
          <p className="text-sm text-[#e6007e] font-mono mb-4">{this.state.error?.message || "An error occurred while rendering the page"}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-full bg-[#e6007e] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#e6007e]/30"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
