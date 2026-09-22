import {createContext,useContext,useMemo,useState} from 'react';
import {projects as seedProjects} from './data/projects';
import {images} from './config/images';

const storageKey = 'cam-project-catalogue';
const cloneProjects = (items) => items.map((project) => ({...project, updates: project.updates || []}));

function readProjects(){
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : cloneProjects(seedProjects);
  } catch {
    return cloneProjects(seedProjects);
  }
}

function writeProjects(items){
  window.localStorage.setItem(storageKey,JSON.stringify(items));
}

function createSlug(title){
  const base = title.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'new-project';
  return `${base}-${Date.now().toString(36)}`;
}

const ProjectContext = createContext(null);

export function ProjectProvider({children}){
  const [projects,setProjects] = useState(readProjects);

  const save = (nextProjects) => {
    setProjects(nextProjects);
    writeProjects(nextProjects);
  };

  const addProject = (draft) => {
    const gallery = draft.files?.filter((file) => file.dataUrl && file.type.startsWith('image/')).map((file) => file.dataUrl) || [];
    const project = {
      slug: createSlug(draft.title),
      title: draft.title,
      category: draft.category,
      location: draft.location,
      status: draft.status,
      createdAt: new Date().toISOString().slice(0,10),
      image: gallery[0] || images.building,
      description: draft.description,
      client: draft.client || 'Private Client',
      type: draft.category,
      scope: draft.scope ? draft.scope.split(',').map((item) => item.trim()).filter(Boolean) : [],
      challenges: 'Project requirements and site conditions will be tracked through ongoing updates.',
      solutions: 'Delivery progress will be documented by the project team.',
      results: 'Final results will be added at project completion.',
      gallery,
      updates: draft.updateTitle ? [{
        id: crypto.randomUUID(),
        title: draft.updateTitle,
        date: draft.updateDate || new Date().toISOString().slice(0,10),
        notes: draft.updateNotes || '',
        files: gallery
      }] : []
    };
    save([project,...projects]);
    return project;
  };

  const addUpdate = (projectSlug,draft) => {
    const files = draft.files?.filter((file) => file.dataUrl && file.type.startsWith('image/')).map((file) => file.dataUrl) || [];
    const update = {
      id: crypto.randomUUID(),
      title: draft.title,
      date: draft.date || new Date().toISOString().slice(0,10),
      notes: draft.notes,
      files
    };
    const nextProjects = projects.map((project) => project.slug === projectSlug ? {
      ...project,
      status: draft.status || project.status,
      gallery: [...(project.gallery || []), ...files],
      updates: [...(project.updates || []), update]
    } : project);
    save(nextProjects);
    return update;
  };

  const value = useMemo(() => ({projects,addProject,addUpdate}),[projects]);
  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

export function useProjectCatalog(){
  return useContext(ProjectContext);
}
