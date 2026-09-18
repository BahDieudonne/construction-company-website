import {Link} from 'react-router-dom';
import {CardImage, Status} from './UI';

export function ServiceCard({item}) {
  return (
    <article className="card service-card">
      <CardImage src={item.image} alt={item.title} />
      <div className="card-body">
        <span className="eyebrow">Service</span>
        <h3>{item.title}</h3>
        <p>{item.short}</p>
        <Link className="text-link" to={`/services/${item.slug}`}>Explore service →</Link>
      </div>
    </article>
  );
}

export function ProjectCard({item}) {
  return (
    <article className="card">
      <CardImage src={item.image} alt={item.title} />
      <div className="card-body">
        <Status>{item.status}</Status>
        <span className="muted">{item.category} · {item.location}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Link className="text-link" to={`/projects/${item.slug}`}>View project →</Link>
      </div>
    </article>
  );
}

export function ProductCard({item}) {
  return (
    <article className="card">
      <CardImage src={item.image} alt={item.name} />
      <div className="card-body">
        <span className="muted">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.short}</p>
        <Status>{item.availability}</Status>
        <Link className="text-link" to={`/products/${item.slug}`}>View supply →</Link>
      </div>
    </article>
  );
}

export function TestimonialCard({item}) {
  return (
    <article className="quote-card">
      <div className="stars">★★★★★</div>
      <p>“{item.quote}”</p>
      <strong>{item.name}</strong>
      <span>{item.role}</span>
    </article>
  );
}
