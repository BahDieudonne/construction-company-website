import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProjectManager from './components/ProjectManager';
import {
  About,
  Blog,
  BlogArticle,
  Careers,
  Contact,
  FAQ,
  Home,
  Industries,
  NotFound,
  Privacy,
  ProductDetail,
  Products,
  ProjectDetail,
  Projects,
  Quote,
  ServiceDetail,
  Services,
  Team,
  Testimonials,
  Terms,
  WhyUs
} from './pages';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-quote" element={<Quote />} />
        <Route path="/project-manager" element={<ProjectManager />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}