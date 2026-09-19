import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {company} from '../config/company';

const navItems = [
  {
    to: '/',
    label: 'Home',
    dropdown: [
      { to: '/about', label: 'About the company', featured: false },
      { to: '/why-us', label: 'Why choose us', featured: false },
      { to: '/projects', label: 'Featured projects', featured: true },
      { to: '/contact', label: 'Contact us', featured: false }
    ]
  },
  {
    to: '/about',
    label: 'About',
    dropdown: [
      { to: '/about', label: 'Company overview', featured: true },
      { to: '/team', label: 'Our team', featured: false },
      { to: '/careers', label: 'Careers', featured: false },
      { to: '/faq', label: 'FAQs', featured: false }
    ]
  },
  {
    to: '/services',
    label: 'Services',
    dropdown: [
      { to: '/services/building-construction', label: 'Building construction', featured: true },
      { to: '/services/civil-engineering', label: 'Civil engineering', featured: false },
      { to: '/services/road-construction', label: 'Road works', featured: false },
      { to: '/services', label: 'All services', featured: false }
    ]
  },
  {
    to: '/projects',
    label: 'Projects',
    dropdown: [
      { to: '/projects', label: 'Portfolio', featured: true },
      { to: '/projects/commercial-buildings', label: 'Commercial work', featured: false },
      { to: '/projects/infrastructure', label: 'Infrastructure', featured: false },
      { to: '/products', label: 'Construction supplies', featured: false }
    ]
  },
  {
    to: '/products',
    label: 'Products',
    dropdown: [
      { to: '/products', label: 'Material supply', featured: true },
      { to: '/industries', label: 'Industry solutions', featured: false },
      { to: '/why-us', label: 'Quality assurance', featured: false },
      { to: '/request-quote', label: 'Request a quote', featured: false }
    ]
  },
  {
    to: '/blog',
    label: 'Blog',
    dropdown: [
      { to: '/blog', label: 'Insights & updates', featured: true },
      { to: '/blog/construction-tips', label: 'Project advice', featured: false },
      { to: '/testimonials', label: 'Client feedback', featured: false },
      { to: '/contact', label: 'Talk to our team', featured: false }
    ]
  }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={company.logo} alt={`${company.companyName} logo`} />
        </Link>

        <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.to}
                className={`nav-item ${openItem === item.to ? 'active' : ''}`}
                onMouseEnter={() => setOpenItem(item.to)}
                onMouseLeave={() => setOpenItem(null)}
                onFocus={() => setOpenItem(item.to)}
                onBlur={() => setOpenItem(null)}
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {item.label}
                </NavLink>

                {item.dropdown && (
                  <div className={`nav-dropdown ${openItem === item.to ? 'show' : ''}`}>
                    <div className="nav-dropdown-grid">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.to}
                          to={subItem.to}
                          onClick={() => setOpen(false)}
                          className={subItem.featured ? 'featured-link' : ''}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link className="nav-cta" to="/request-quote" onClick={() => setOpen(false)}>
            Request a Quote
          </Link>
        </nav>

        <button className="menu-btn" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

