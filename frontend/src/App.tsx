import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';

// Public pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Dashboard pages
import DashboardOverview from './pages/dashboard/Dashboard';
import Projects from './pages/dashboard/Projects';
import ProjectCreate from './pages/dashboard/ProjectCreate';
import Leads from './pages/dashboard/Leads';
import Reviews from './pages/dashboard/Reviews';
import Analytics from './pages/dashboard/Analytics';
import DashboardSettings from './pages/dashboard/Settings';
import Billing from './pages/dashboard/Billing';
import DashboardPortfolio from './pages/dashboard/Portfolio';

// Public portfolio & project pages
import PublicPortfolio from './pages/public/Portfolio';
import PublicProjectPage from './pages/public/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/new" element={<ProjectCreate />} />
          <Route path="leads" element={<Leads />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="portfolio" element={<DashboardPortfolio />} />
          <Route path="settings" element={<DashboardSettings />} />
          <Route path="billing" element={<Billing />} />
        </Route>

        {/* Public business portfolio */}
        <Route path="/b/:businessSlug" element={<PublicPortfolio />} />

        {/* Public project page */}
        <Route path="/p/:businessSlug/:projectSlug" element={<PublicProjectPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
