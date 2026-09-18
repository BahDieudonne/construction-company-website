import {useState} from 'react';

export function ContactForm() {
  const [state, setState] = useState('idle');

  const submit = (event) => {
    event.preventDefault();
    setState('success');
  };

  if (state === 'success') {
    return (
      <div className="success">
        <h3>Thank you for your enquiry</h3>
        <p>Your message has been received and our team will review it shortly.</p>
        <button type="button" className="btn" onClick={() => setState('idle')}>Send another</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full Name<input required name="name" autoComplete="name" /></label>
        <label>Email<input required type="email" name="email" autoComplete="email" /></label>
        <label>Phone<input required name="phone" autoComplete="tel" /></label>
        <label>Subject<input required name="subject" /></label>
      </div>
      <label>Message<textarea required name="message" rows="6" /></label>
      <label className="check">
        <input type="checkbox" required />
        <span>I agree to the <a href="/privacy">privacy notice</a>.</span>
      </label>
      <button className="btn" type="submit">Send Enquiry</button>
    </form>
  );
}

export function QuoteForm() {
  const [state, setState] = useState('idle');

  const submit = (event) => {
    event.preventDefault();
    setState('success');
  };

  if (state === 'success') {
    return (
      <div className="success">
        <h3>Quote request received</h3>
        <p>Thank you for your enquiry. Our team will review your project requirements and contact you soon.</p>
        <button className="btn" onClick={() => setState('idle')}>Submit another request</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full Name<input required name="name" autoComplete="name" /></label>
        <label>Company / Organization<input name="organization" autoComplete="organization" /></label>
        <label>Phone Number<input required name="phone" autoComplete="tel" /></label>
        <label>Email<input required type="email" name="email" autoComplete="email" /></label>
        <label>Project Type<select required name="projectType"><option value="">Select</option><option>Residential</option><option>Commercial</option><option>Roads</option><option>Infrastructure</option><option>Renovation</option><option>Civil Works</option></select></label>
        <label>Service Required<select required name="service"><option value="">Select</option><option>Building Construction</option><option>Road Construction</option><option>Civil Engineering</option><option>Renovation & Remodeling</option><option>Infrastructure Development</option><option>Project Management</option><option>General Contracting</option><option>Material Supply</option></select></label>
        <label>Project Location<input required name="location" placeholder="City / Region" /></label>
        <label>Estimated Budget<input name="budget" placeholder="Optional" /></label>
        <label>Preferred Start Date<input type="date" name="startDate" /></label>
        <label>Preferred Contact Method<select name="contactMethod"><option>Phone</option><option>WhatsApp</option><option>Email</option></select></label>
      </div>
      <label>Project Description<textarea required name="description" rows="7" placeholder="Tell us about the project, scope, timeline and site requirements." /></label>
      <button className="btn" type="submit">Request a Quote</button>
    </form>
  );
}

export function CareerForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="success">
        <h3>Application received</h3>
        <p>Thank you for applying. Our team will review your details and be in touch if your profile matches an opening.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={(event) => {event.preventDefault(); setSent(true);}}>
      <div className="form-grid">
        <label>Full Name<input required /></label>
        <label>Email<input required type="email" /></label>
        <label>Phone<input required /></label>
        <label>Position<input required /></label>
      </div>
      <label>Cover Message<textarea required rows="6" /></label>
      <label>CV / Resume<input type="file" accept=".pdf,.doc,.docx" /></label>
      <button className="btn">Submit Application</button>
    </form>
  );
}
