import {Link} from 'react-router-dom';import {company} from '../config/company';
export function SectionHeading({eyebrow,title,text,center=false}){return <div className={`section-heading ${center?'center':''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
export function Button({to,children,secondary=false}){return <Link className={`btn ${secondary?'btn-secondary':''}`} to={to}>{children}</Link>}
export function WhatsAppButton({label='Chat on WhatsApp',message=''}){const n=company.whatsapp.replace(/\D/g,'');return <a className="btn btn-whatsapp" href={`https://wa.me/${n}${message?`?text=${encodeURIComponent(message)}`:''}`} target="_blank" rel="noreferrer">{label}</a>}
export function CTA({title='Let’s discuss your next project.',text='Share your requirements and our team can review the scope with you.',label='Request a Quote'}){return <section className="cta"><div className="container cta-inner"><div><span className="eyebrow">Start a conversation</span><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><Button to="/request-quote">{label}</Button><WhatsAppButton/></div></div></section>}
export function Breadcrumbs({items=[]}){return <div className="container breadcrumbs"><Link to="/">Home</Link>{items.map((x,i)=><span key={i}> / {x.to?<Link to={x.to}>{x.label}</Link>:x.label}</span>)}</div>}
export function Status({children}){return <span className="status">{children}</span>}
export function CardImage({src,alt}){return <img className="card-img" src={src} alt={alt} loading="lazy"/>}
