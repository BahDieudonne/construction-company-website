import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useProjectCatalog} from '../projectStore.jsx';

const categories = ['Commercial','Roads','Residential','Infrastructure','Bridges','Houses','Drainage','Institutional','Renovation'];
const statuses = ['Under Construction','Completed'];

function filesToData(files){
  return Promise.all([...files].map((file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve({name:file.name,type:file.type,dataUrl:reader.result});
    reader.readAsDataURL(file);
  })));
}

export default function ProjectManager(){
  const {projects,addProject,addUpdate} = useProjectCatalog();
  const [mode,setMode] = useState('new');
  const [selectedProject,setSelectedProject] = useState(projects[0]?.slug || '');
  const [files,setFiles] = useState([]);
  const [message,setMessage] = useState('');
  const [newForm,setNewForm] = useState({title:'',category:'Commercial',status:'Under Construction',location:'',client:'',description:'',scope:''});
  const [updateForm,setUpdateForm] = useState({title:'',date:new Date().toISOString().slice(0,10),status:'',notes:''});

  const updateNew = (event) => setNewForm({...newForm,[event.target.name]:event.target.value});
  const updateExisting = (event) => setUpdateForm({...updateForm,[event.target.name]:event.target.value});
  const chooseFiles = async (event) => setFiles(await filesToData(event.target.files));

  const publish = (event) => {
    event.preventDefault();
    if(mode === 'new'){
      const project = addProject({...newForm,files,updateTitle:'',updateNotes:''});
      setSelectedProject(project.slug);
      setMessage(`Project published: ${project.title}`);
      setNewForm({title:'',category:'Commercial',status:'Under Construction',location:'',client:'',description:'',scope:''});
    } else {
      const update = addUpdate(selectedProject,{...updateForm,files});
      setMessage(`Update published: ${update.title}`);
      setUpdateForm({title:'',date:new Date().toISOString().slice(0,10),status:'',notes:''});
    }
    setFiles([]);
  };

  return (
    <>
      <section className="page-hero project-manager-hero">
        <div className="container">
          <span className="eyebrow">Project publishing</span>
          <h1>Keep every project story up to date.</h1>
          <p>Publish new work and add dated progress updates from the first day on site through final handover.</p>
        </div>
      </section>
      <section className="section project-manager-section">
        <div className="container project-manager-grid">
          <div className="project-manager-intro">
            <span className="eyebrow">Project workspace</span>
            <h2>What are you posting today?</h2>
            <p>Choose a new project to create a portfolio entry, or select an existing project to add another milestone.</p>
            <div className="project-manager-stats">
              <div><strong>{projects.length}</strong><span>Published projects</span></div>
              <div><strong>{projects.reduce((total,project) => total + (project.updates || []).length,0)}</strong><span>Progress updates</span></div>
            </div>
          </div>
          <form className="form project-manager-form" onSubmit={publish}>
            <div className="publish-mode" role="radiogroup" aria-label="Post type">
              <label className={mode === 'new' ? 'selected' : ''}><input type="radio" checked={mode === 'new'} onChange={() => setMode('new')} />New project</label>
              <label className={mode === 'update' ? 'selected' : ''}><input type="radio" checked={mode === 'update'} onChange={() => setMode('update')} />Project update</label>
            </div>

            {mode === 'new' ? (
              <div className="manager-fields">
                <label>Project name<input required name="title" value={newForm.title} onChange={updateNew} placeholder="Example: Mbingo Community Clinic" /></label>
                <div className="form-grid">
                  <label>Category<select name="category" value={newForm.category} onChange={updateNew}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
                  <label>Status<select name="status" value={newForm.status} onChange={updateNew}>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
                  <label>Location<input required name="location" value={newForm.location} onChange={updateNew} placeholder="City, Region" /></label>
                  <label>Client<input name="client" value={newForm.client} onChange={updateNew} placeholder="Client or partner" /></label>
                </div>
                <label>Description<textarea required name="description" value={newForm.description} onChange={updateNew} rows="5" placeholder="Describe the work, purpose and current outcome." /></label>
                <label>Scope <span className="field-hint">comma separated</span><input name="scope" value={newForm.scope} onChange={updateNew} placeholder="Site preparation, structural works, finishing" /></label>
              </div>
            ) : (
              <div className="manager-fields">
                <label>Project to update<select required value={selectedProject} onChange={(event) => setSelectedProject(event.target.value)}>{projects.map((project) => <option value={project.slug} key={project.slug}>{project.title}</option>)}</select></label>
                <div className="form-grid">
                  <label>Update title<input required name="title" value={updateForm.title} onChange={updateExisting} placeholder="Day 12: Foundation works complete" /></label>
                  <label>Date<input required type="date" name="date" value={updateForm.date} onChange={updateExisting} /></label>
                </div>
                <label>Update status<select name="status" value={updateForm.status} onChange={updateExisting}><option value="">Keep current status</option>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
                <label>Progress notes<textarea required name="notes" value={updateForm.notes} onChange={updateExisting} rows="6" placeholder="What happened today? Mention progress, decisions, materials or next steps." /></label>
              </div>
            )}

            <label className="upload-field">Project photos or documents<input type="file" multiple accept="image/*,.pdf,.doc,.docx" onChange={chooseFiles} /><span>{files.length ? `${files.length} file(s) ready to publish` : 'Choose images or documents'}</span></label>
            <button className="btn" type="submit">{mode === 'new' ? 'Publish New Project' : 'Publish Project Update'}</button>
            {message && <p className="success-message" role="status">{message}</p>}
          </form>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">Published catalogue</span><h2>Recent project activity</h2><p>Open a project to review its full story and update timeline.</p></div>
          <div className="project-activity-list">{projects.slice(0,8).map((project) => <Link to={`/projects/${project.slug}`} className="project-activity-row" key={project.slug}><span><strong>{project.title}</strong><small>{project.category} · {project.status}</small></span><b>{project.updates?.length || 0} updates →</b></Link>)}</div>
        </div>
      </section>
    </>
  );
}
