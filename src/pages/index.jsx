import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {company} from '../config/company';
import {images} from '../config/images';
import {services} from '../data/services';
import {projects} from '../data/projects';
import {products} from '../data/products';
import {testimonials} from '../data/testimonials';
import {team} from '../data/team';
import {blogPosts} from '../data/blog';
import {SectionHeading, Button, WhatsAppButton, CTA, Breadcrumbs, Status} from '../components/UI';
import {ServiceCard, ProjectCard, ProductCard, TestimonialCard} from '../components/Cards';
import {ContactForm, QuoteForm, CareerForm} from '../components/Forms';
import SEO, {orgSchema} from '../components/SEO';
import {useProjectCatalog} from '../projectStore.jsx';

const industries = [
  'Residential',
  'Commercial',
  'Industrial',
  'Government / Public Infrastructure',
  'Real Estate',
  'Property Development',
  'Institutional',
  'Hospitality'
];

const faqs = [
  ['What construction services do you offer?', 'We provide building construction, civil engineering, roadworks, renovation, infrastructure development, project management and construction material supply services for residential, commercial and institutional clients.'],
  ['Do you handle residential projects?', 'Yes. We work on residential developments, upgrades and finishing projects with a practical, client-focused approach from planning through handover.'],
  ['Do you work on road construction?', 'Yes. We undertake road construction, rehabilitation and drainage-related works to improve access, durability and usability.'],
  ['Can I request a quotation?', 'Yes. Use the request-a-quote form or WhatsApp us with your project brief, location and scope and our team will review the next steps.'],
  ['Do you supply construction materials?', 'Yes. We support projects with construction materials and supply coordination to keep site works moving efficiently.'],
  ['How do I start a project?', 'Send your brief, desired scope, location and schedule. We can review the project requirements and advise on the most suitable route forward.']
];

function PageHero({eyebrow, title, text, children}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <SEO title={company.seo.title} description={company.seo.description} schema={[orgSchema()]} />
      <section className="hero" style={{backgroundImage: `linear-gradient(90deg,rgba(7,18,30,.88),rgba(7,18,30,.42)),url(${images.hero})`}}>
        <div className="container hero-content">
          <span className="eyebrow">CONSTRUCTION · CIVIL ENGINEERING · SUPPLIES</span>
          <h1>Engineering progress.<br /><em>Built to last.</em></h1>
          <p>{company.description}</p>
          <div className="hero-actions">
            <Button to="/request-quote">Request a Quote</Button>
            <Button to="/projects" secondary>View Our Projects</Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Construction solutions shaped around the project.</h2>
          </div>
          <div>
            <p>{company.about}</p>
            <Button to="/about" secondary>About the Company</Button>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Core capabilities" text="Professional construction and infrastructure services focused on quality, accountability and practical delivery." />
          <div className="grid-4">
            {services.slice(0, 4).map((item) => <ServiceCard item={item} key={item.slug} />)}
          </div>
          <div className="center-btn">
            <Button to="/services" secondary>View All Services</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="Project portfolio" text="Recent work built around reliable execution, coordination and long-term value." />
          <div className="grid-3">
            {projects.slice(0, 3).map((item) => <ProjectCard item={item} key={item.slug} />)}
          </div>
          <div className="center-btn">
            <Button to="/projects" secondary>Explore Projects</Button>
          </div>
        </div>
      </section>

      <section className="split-feature">
        <div className="split-image" style={{backgroundImage: `url(${images.meeting})`}} />
        <div className="split-copy">
          <span className="eyebrow">Why clients choose us</span>
          <h2>Professional execution with practical project oversight.</h2>
          <p>We combine planning, accountability and site supervision to keep projects moving without sacrificing quality or safety.</p>
          <ul className="check-list">
            <li>Reliable project communication</li>
            <li>Site-focused quality management</li>
            <li>Clear coordination across trades and suppliers</li>
          </ul>
          <Button to="/why-us" secondary>Learn Why</Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Trusted by growing clients" title="A company built on accountability" text="We support residential, commercial and institutional projects with steady delivery and practical problem solving." />
          <div className="grid-4 stats-grid">
            {company.statistics.map((stat) => (
              <div key={stat.label} className="stat">
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Client feedback" title="What our clients say" text="Feedback from clients who value dependable delivery and professional coordination." />
          <div className="grid-3">
            {testimonials.map((item) => <TestimonialCard item={item} key={item.name} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our team" title="People behind the work" text="Experienced professionals focused on site efficiency, quality control and client communication." />
          <div className="grid-3">
            {team.slice(0, 3).map((member) => (
              <article className="team-card" key={member.name}>
                <img src={member.image} alt={member.name} style={{filter:'grayscale(100%) contrast(1.08)', width:'100%', height:'260px', objectFit:'cover', display:'block'}} />
                <div style={{padding:'22px 20px 18px'}}>
                  <h2>{member.name}</h2>
                  <h4>{member.position}</h4>
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export function About() {
  return (
    <>
      <SEO title={`About Us | ${company.companyName}`} description={company.description} path="/about" />
      <PageHero eyebrow="About us" title="Built on discipline. Focused on lasting value." text={company.about} />

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Our story</span>
            <h2>Built around quality, accountability and practical delivery.</h2>
            <p>{company.about}</p>
            <p>We have developed a reputation for dependable execution across residential, commercial and infrastructure work, combining planning discipline with hands-on site supervision.</p>
          </div>
          <div className="info-panel">
            <h3>Company snapshot</h3>
            <p><b>Established:</b> {company.yearEstablished}</p>
            <p><b>Location:</b> {company.city}, {company.region}, {company.country}</p>
            <p><b>Registration:</b> {company.registration}</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container three-col">
          <div>
            <span className="eyebrow">Mission</span>
            <h2>{company.mission}</h2>
          </div>
          <div>
            <span className="eyebrow">Vision</span>
            <h2>{company.vision}</h2>
          </div>
          <div>
            <span className="eyebrow">Values</span>
            <ul className="clean-list">
              {company.coreValues.map((value) => <li key={value}>{value}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Capabilities" title="Construction solutions for modern project demands" />
          <div className="grid-4">
            {services.slice(0, 4).map((item) => <ServiceCard item={item} key={item.slug} />)}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export function Services() {
  return (
    <>
      <SEO title={`Construction Services | ${company.companyName}`} description="Construction, civil engineering, road works, renovation and supply services." path="/services" />
      <PageHero eyebrow="Services" title="Construction and engineering capabilities" text="We deliver practical construction, civil and infrastructure services designed to support quality execution from planning through handover." />
      <section className="section">
        <div className="container grid-3">
          {services.map((item) => <ServiceCard item={item} key={item.slug} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function ServiceDetail() {
  const {slug} = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <NotFound />;

  const schema = {'@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.description, provider: orgSchema()};

  return (
    <>
      <SEO title={`${service.title} | ${company.companyName}`} description={service.short} path={`/services/${service.slug}`} schema={[schema]} />
      <Breadcrumbs items={[{label: 'Services', to: '/services'}, service.title]} />
      <PageHero eyebrow="Service detail" title={service.title} text={service.description} />
      <section className="section">
        <div className="container detail-grid">
          <img className="detail-image" src={service.image} alt={service.title} />
          <div>
            <span className="eyebrow">Key features</span>
            <ul className="check-list">
              {service.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <h3>Client benefits</h3>
            <ul className="check-list">
              {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
            <Button to="/request-quote">Discuss This Service</Button>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Process" title="Typical delivery sequence" />
          <div className="process-grid">
            {service.process.map((step, index) => (
              <div key={step}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <h3>{step}</h3>
                <p>Handled with practical coordination and quality-focused supervision.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title={`Need ${service.title.toLowerCase()}?`} />
    </>
  );
}

export function Projects() {
  const {projects} = useProjectCatalog();
  const [cat, setCat] = useState('All');
  const cats = ['All', ...new Set(projects.map((project) => project.category))];

  return (
    <>
      <SEO title={`Projects | ${company.companyName}`} description="Construction and civil engineering project portfolio." path="/projects" />
      <PageHero eyebrow="Projects" title="Work portfolio" text="A selection of projects shaped by practical planning, reliable execution and long-term value." />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Project categories">
            {cats.map((category) => (
              <button className={cat === category ? 'active' : ''} onClick={() => setCat(category)} key={category}>
                {category}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {projects.filter((project) => cat === 'All' || project.category === cat).map((project) => <ProjectCard item={project} key={project.slug} />)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function ProjectDetail() {
  const {slug} = useParams();
  const {projects} = useProjectCatalog();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  return (
    <>
      <SEO title={`${project.title} | Projects`} description={project.description} path={`/projects/${project.slug}`} />
      <Breadcrumbs items={[{label: 'Projects', to: '/projects'}, project.title]} />
      <PageHero eyebrow={project.status} title={project.title} text={project.description} />
      <section className="section">
        <div className="container project-meta">
          <div><span>Category</span><b>{project.category}</b></div>
          <div><span>Location</span><b>{project.location}</b></div>
          <div><span>Client</span><b>{project.client}</b></div>
          <div><span>Status</span><b>{project.status}</b></div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow project-timeline">
          <SectionHeading eyebrow="Project journal" title="Progress from site to handover" text="Follow the project story in date order, from the first site activity to completion." />
          <div className="timeline-list">
            <article className="timeline-entry timeline-start">
              <span className="muted">{project.createdAt || 'Project record'}</span>
              <h3>Project started</h3>
              <p>{project.description}</p>
            </article>
            {[...(project.updates || [])].sort((first,second) => first.date.localeCompare(second.date)).map((update) => (
              <article className="timeline-entry" key={update.id}>
                <span className="muted">{update.date}</span>
                <h3>{update.title}</h3>
                <p>{update.notes}</p>
                {update.files?.length > 0 && <div className="timeline-media">{update.files.filter((file) => file.startsWith('data:image')).map((file) => <img key={file} src={file} alt={update.title} loading="lazy" />)}</div>}
              </article>
            ))}
            {project.updates?.length === 0 && <p className="timeline-empty">No progress updates have been posted yet. The project team can add the first site update from the project publishing workspace.</p>}
            {project.status === 'Completed' && (
              <article className="timeline-entry timeline-complete">
                <span className="muted">Current status</span>
                <h3>Project completed</h3>
                <p>{project.results}</p>
              </article>
            )}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container two-col">
          <div>
            <h2>Scope of work</h2>
            <ul className="check-list">
              {project.scope.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h2>Challenges</h2>
            <p>{project.challenges}</p>
            <h2>Solutions</h2>
            <p>{project.solutions}</p>
            <h2>Results</h2>
            <p>{project.results}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Project imagery" text="A view of the project environment and finished works." />
          <div className="gallery">
            {project.gallery.map((image, index) => (
              <img key={index} src={image} alt={`${project.title} project image ${index + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Products() {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');
  const categories = ['All', ...new Set(products.map((item) => item.category))];
  const list = products.filter((item) => (cat === 'All' || item.category === cat) && item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <SEO title={`Construction Supplies | ${company.companyName}`} description="Reliable construction materials, hardware and site supply solutions for project requirements." path="/products" />
      <PageHero eyebrow="Products & supplies" title="Construction supply catalogue" text="Practical site materials and supply support for residential, commercial and infrastructure projects." />
      <section className="section">
        <div className="container">
          <div className="search-row">
            <input aria-label="Search products" placeholder="Search supplies…" value={query} onChange={(event) => setQuery(event.target.value)} />
            <div className="filters">
              {categories.map((category) => (
                <button className={cat === category ? 'active' : ''} onClick={() => setCat(category)} key={category}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid-4">
            {list.map((item) => <ProductCard item={item} key={item.slug} />)}
          </div>
          {!list.length && <div className="empty">No products match your search.</div>}
        </div>
      </section>
      <CTA title="Need a material or supply quote?" />
    </>
  );
}

export function ProductDetail() {
  const {slug} = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) return <NotFound />;

  return (
    <>
      <SEO title={`${product.name} | Construction Supplies`} description={product.short} path={`/products/${product.slug}`} schema={[{'@context': 'https://schema.org', '@type': 'Product', name: product.name, description: product.description, brand: {'@type': 'Brand', name: company.companyName}}]} />
      <Breadcrumbs items={[{label: 'Products', to: '/products'}, product.name]} />
      <section className="section">
        <div className="container detail-grid">
          <img className="detail-image" src={product.image} alt={product.name} />
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <Status>{product.availability}</Status>
            <p>{product.description}</p>
            <ul className="check-list">
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="cta-actions">
              <Button to="/request-quote">Request Quote</Button>
              <WhatsAppButton label="Ask on WhatsApp" message={`Hello, I would like to ask about ${product.name}.`} />
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Industries() {
  return (
    <>
      <SEO title={`Industries We Serve | ${company.companyName}`} description="Construction and infrastructure solutions for residential, commercial, industrial and institutional sectors." path="/industries" />
      <PageHero eyebrow="Industries" title="Solutions across project types and sectors" text="We deliver construction and infrastructure support across residential, commercial, institutional and public-sector developments." />
      <section className="section">
        <div className="container industry-detail-grid">
          {industries.map((industry, index) => (
            <article key={industry}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{industry}</h2>
              <p>Our team adapts project planning, execution and coordination to the demands of each sector and client environment.</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function WhyUs() {
  const items = ['Quality workmanship', 'Safety-conscious operations', 'Professional project management', 'Reliable delivery', 'Transparent communication', 'Skilled workforce', 'Attention to detail', 'Customer-focused service'];

  return (
    <>
      <SEO title={`Why Choose Us | ${company.companyName}`} description="Quality, safety, reliability and communication in every construction and engineering project." path="/why-us" />
      <PageHero eyebrow="Why choose us" title="Principles that shape professional delivery" text="We combine practical field experience, quality-focused supervision and consistent communication to support successful project outcomes." />
      <section className="section">
        <div className="container grid-2">
          {items.map((item, index) => (
            <article className="principle" key={item}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <div>
                <h2>{item}</h2>
                <p>These values guide each site decision, client interaction and delivery milestone.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Team() {
  return (
    <>
      <SEO title={`Our Team | ${company.companyName}`} description="Experienced professionals focused on quality delivery and responsive project coordination." path="/team" />
      <PageHero eyebrow="Our team" title="People behind the work" text="A team of project professionals dedicated to quality, productivity and clear communication." />
      <section className="section">
        <div className="container grid-3">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <img src={member.image} alt={member.name} style={{filter:'grayscale(100%) contrast(1.08)', width:'100%', height:'290px', objectFit:'cover', display:'block'}} />
              <div style={{padding:'22px 20px 18px'}}>
                <h2>{member.name}</h2>
                <h4>{member.position}</h4>
                <p>{member.bio}</p>
                {member.social !== '#' && <a href={member.social}>LinkedIn →</a>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Careers() {
  return (
    <>
      <SEO title={`Careers | ${company.companyName}`} description="Explore opportunities to join a growing construction and engineering team." path="/careers" />
      <PageHero eyebrow="Careers" title="Build your career with us" text="We are always looking for skilled, reliable and safety-conscious professionals ready to contribute to project quality and client satisfaction." />
      <section className="section">
        <div className="container two-col">
          <div>
            <Status>Open Opportunities</Status>
            <h2>Site / Project Support Role</h2>
            <p>We are seeking motivated professionals who can support site coordination, documentation, quality control and project follow-through.</p>
            <h3>Responsibilities</h3>
            <ul className="check-list">
              <li>Support site supervision and daily reporting</li>
              <li>Coordinate project documentation and material tracking</li>
              <li>Assist with quality checks and client communication</li>
            </ul>
            <h3>Requirements</h3>
            <ul className="check-list">
              <li>Strong attention to detail and site discipline</li>
              <li>Ability to work with teams and communicate clearly</li>
              <li>Practical knowledge of construction or site operations</li>
            </ul>
          </div>
          <CareerForm />
        </div>
      </section>
    </>
  );
}

export function Blog() {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const list = blogPosts.filter((post) => (cat === 'All' || post.category === cat) && (post.title + post.excerpt).toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <SEO title={`Blog & News | ${company.companyName}`} description="Construction, engineering and project insight updates from the field." path="/blog" />
      <PageHero eyebrow="Blog & news" title="Ideas, insights and project knowledge" text="Practical construction and project guidance for clients, partners and professionals." />
      <section className="section">
        <div className="container">
          <div className="search-row">
            <input placeholder="Search articles…" aria-label="Search articles" value={query} onChange={(event) => setQuery(event.target.value)} />
            <div className="filters">
              {categories.map((category) => (
                <button className={cat === category ? 'active' : ''} onClick={() => setCat(category)} key={category}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid-3">
            {list.map((post) => (
              <article className="card" key={post.slug}>
                <img className="card-img" src={post.image} alt={post.title} loading="lazy" />
                <div className="card-body">
                  <span className="muted">{post.category} · {post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link className="text-link" to={`/blog/${post.slug}`}>Read article →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function BlogArticle() {
  const {slug} = useParams();
  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) return <NotFound />;

  return (
    <>
      <SEO title={`${article.title} | ${company.companyName}`} description={article.excerpt} path={`/blog/${article.slug}`} schema={[{'@context': 'https://schema.org', '@type': 'Article', headline: article.title, datePublished: article.date, author: {'@type': 'Organization', name: company.companyName}}]} />
      <Breadcrumbs items={[{label: 'Blog', to: '/blog'}, article.title]} />
      <article className="article">
        <div className="container narrow">
          <span className="muted">{article.category} · {article.date}</span>
          <h1>{article.title}</h1>
          <img className="article-image" src={article.image} alt={article.title} />
          {article.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </article>
      <CTA />
    </>
  );
}

export function FAQ() {
  return (
    <>
      <SEO title={`FAQ | ${company.companyName}`} description="Frequently asked construction and supply questions." path="/faq" />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" text="Answers to the most common questions we receive from clients planning construction and infrastructure work." />
      <section className="section">
        <div className="container narrow faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question} open={false}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Testimonials() {
  return (
    <>
      <SEO title={`Testimonials | ${company.companyName}`} description="Client feedback from construction projects completed with professionalism and care." path="/testimonials" />
      <PageHero eyebrow="Testimonials" title="What clients say" text="Feedback from clients who value quality work, clear communication and dependable delivery." />
      <section className="section">
        <div className="container grid-3">
          {testimonials.map((item) => <TestimonialCard item={item} key={item.name} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Contact() {
  return (
    <>
      <SEO title={`Contact Us | ${company.companyName}`} description="Contact details and enquiry form." path="/contact" />
      <PageHero eyebrow="Contact" title="Let’s talk about your project" text="Reach out to discuss your project scope, delivery timeline and site requirements." />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-item"><span>Phone</span><a href={`tel:${company.phone}`}>{company.phone}</a></div>
            <div className="contact-item"><span>Email</span><a href={`mailto:${company.email}`}>{company.email}</a></div>
            <div className="contact-item"><span>WhatsApp</span><WhatsAppButton label="Chat on WhatsApp" /></div>
            <div className="contact-item"><span>Address</span><a href={company.mapsUrl} target="_blank" rel="noreferrer">{company.address}, {company.city}, {company.region}</a></div>
            <div className="contact-item"><span>Business hours</span>{company.businessHours.map((schedule) => <p key={schedule.day}>{schedule.day}: {schedule.hours}</p>)}</div>
            <div className="socials">
              <a href={company.social.facebook}>Facebook</a>
              <a href={company.social.instagram}>Instagram</a>
              <a href={company.social.linkedin}>LinkedIn</a>
              <a href={company.social.tiktok}>TikTok</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="map-wrap">
        <iframe title="Google Maps location" src="https://www.google.com/maps?q=Bamenda%2C%20Cameroon&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </>
  );
}

export function Quote() {
  return (
    <>
      <SEO title={`Request a Quote | ${company.companyName}`} description="Request a construction quotation." path="/request-quote" />
      <PageHero eyebrow="Request a quote" title="Tell us what you’re building" text="Share a few key project details and our team can review the next steps, scope and budget considerations." />
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>What to include</h2>
            <ul className="check-list">
              <li>Project type and location</li>
              <li>Desired scope of work</li>
              <li>Drawings/specifications if available</li>
              <li>Target timeline</li>
              <li>Any relevant site constraints</li>
            </ul>
            <div className="info-panel">
              <h3>Prefer WhatsApp?</h3>
              <p>Send a quick project enquiry directly.</p>
              <WhatsAppButton label="Request Quote on WhatsApp" />
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <>
      <SEO title={`Privacy Policy | ${company.companyName}`} description="Privacy policy for client enquiries and project communication." path="/privacy" />
      <PageHero eyebrow="Legal" title="Privacy Policy" text="This policy outlines how we handle enquiries, project discussions and contact information received through the website." />
      <Legal title="Privacy Policy">
        <p>We collect personal information only when you contact us for a project enquiry, quotation request or general business communication.</p>
        <h2>Information we may receive</h2>
        <p>Contact and quotation forms may collect information such as name, phone, email, project details and relevant site information needed to respond appropriately.</p>
        <h2>Use of information</h2>
        <p>We use this information to respond to enquiries, manage project discussions, prepare quotations and provide the requested services.</p>
        <h2>Third parties</h2>
        <p>We may share information with trusted service providers where necessary to support communication, scheduling or project administration.</p>
      </Legal>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO title={`Terms & Conditions | ${company.companyName}`} description="Terms and conditions for enquiries and project work." path="/terms" />
      <PageHero eyebrow="Legal" title="Terms & Conditions" text="These conditions apply to website enquiries and preliminary project discussions with the company." />
      <Legal title="Terms & Conditions">
        <p>Any information provided through this website is for preliminary discussion and should not be treated as a final contract unless formally approved in writing.</p>
        <h2>Website information</h2>
        <p>We aim to keep the information on this site accurate and up to date, but details may change as project requirements evolve.</p>
        <h2>Quotations</h2>
        <p>Any quote or proposal is subject to review of scope, site conditions and final agreement between the parties.</p>
        <h2>Intellectual property</h2>
        <p>All content, branding and materials on this website remain the property of the company unless otherwise stated.</p>
      </Legal>
    </>
  );
}

function Legal({title, children}) {
  return (
    <section className="section">
      <div className="container narrow legal">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function NotFound() {
  return (
    <>
      <SEO title={`Page Not Found | ${company.companyName}`} description="The requested page could not be found." />
      <section className="not-found">
        <div>
          <span className="eyebrow">404</span>
          <h1>We couldn’t find that page.</h1>
          <p>The page may have moved or the link may be incorrect.</p>
          <Button to="/">Back to Home</Button>
        </div>
      </section>
    </>
  );
}
