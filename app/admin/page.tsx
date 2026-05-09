'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { collection, query, orderBy, getDocs, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { Project } from '@/lib/projects';
import { handleFirestoreError, OperationType } from '@/lib/firebase-errors';

const defaultProject: Project = {
  id: '',
  title: '',
  category: '',
  description: '',
  image: '',
  tags: [],
  content: {
    overview: '',
    problem: '',
    approach: [],
    result: ''
  }
};

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const proj = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Project));
      setProjects(proj);
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'projects'));
    return () => unsubscribe();
  }, [user]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = () => signOut(auth);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject || !editingProject.id) return;
    
    try {
      const isNew = !editingProject.createdAt;
      const ref = doc(db, 'projects', editingProject.id);
      
      const payload = { ...editingProject };
      if (isNew) {
        payload.createdAt = new Date().toISOString();
      }
      payload.updatedAt = new Date().toISOString();
      
      await setDoc(ref, payload, { merge: true });
      setEditingProject(null);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `projects/${editingProject.id}`);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteDoc(doc(db, 'projects', id));
      } catch (err) {
        handleFirestoreError(err, OperationType.DELETE, `projects/${id}`);
      }
    }
  };

  if (loading) return <div className="p-8 font-mono text-sm">Loading...</div>;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="p-8 border border-neutral-200 dark:border-neutral-800 text-center space-y-6">
          <h1 className="font-mono text-xl uppercase font-bold">Admin Portal</h1>
          <p className="text-sm text-neutral-500">Sign in to manage portfolio content.</p>
          <button 
            onClick={handleLogin}
            className="px-4 py-2 bg-primary text-white font-mono text-xs uppercase hover:bg-red-600 transition-colors"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <h1 className="font-mono text-xl uppercase font-bold">Content Manager</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-500">{user.email}</span>
            <button onClick={handleLogout} className="text-[10px] font-mono border border-neutral-200 dark:border-neutral-800 px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors uppercase">Logout</button>
          </div>
        </div>

        {editingProject ? (
          <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
            <h2 className="font-mono text-md uppercase mb-6 font-bold">{editingProject.createdAt ? 'Edit Project' : 'New Project'}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase mb-2">Project ID (URL slug)</label>
                  <input required disabled={!!editingProject.createdAt} value={editingProject.id} onChange={e => setEditingProject({...editingProject, id: e.target.value})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background disabled:opacity-50" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase mb-2">Title</label>
                  <input required value={editingProject.title} onChange={e => setEditingProject({...editingProject, title: e.target.value})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase mb-2">Category</label>
                  <input required value={editingProject.category} onChange={e => setEditingProject({...editingProject, category: e.target.value})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase mb-2">Image URL</label>
                  <input required value={editingProject.image} onChange={e => setEditingProject({...editingProject, image: e.target.value})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase mb-2">Short Description</label>
                <textarea required value={editingProject.description} onChange={e => setEditingProject({...editingProject, description: e.target.value})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background h-24" />
              </div>
              
               <div>
                <label className="block text-[10px] font-mono uppercase mb-2">Tags (comma separated)</label>
                <input required value={editingProject.tags.join(', ')} onChange={e => setEditingProject({...editingProject, tags: e.target.value.split(',').map(s=>s.trim()).filter(Boolean)})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background" />
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <h3 className="font-mono text-sm uppercase mb-4 font-bold">Deep Dive Content</h3>
                <div className="space-y-4">
                   <div>
                    <label className="block text-[10px] font-mono uppercase mb-2">Overview</label>
                    <textarea required value={editingProject.content?.overview} onChange={e => setEditingProject({...editingProject, content: {...editingProject.content!, overview: e.target.value}})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background h-24" />
                  </div>
                   <div>
                    <label className="block text-[10px] font-mono uppercase mb-2">Problem</label>
                    <textarea required value={editingProject.content?.problem} onChange={e => setEditingProject({...editingProject, content: {...editingProject.content!, problem: e.target.value}})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background h-24" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase mb-2">Approach (Enter each point separated by newline)</label>
                    <textarea required value={editingProject.content?.approach.join('\n')} onChange={e => setEditingProject({...editingProject, content: {...editingProject.content!, approach: e.target.value.split('\n').filter(Boolean)}})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background h-32" />
                  </div>
                   <div>
                    <label className="block text-[10px] font-mono uppercase mb-2">Result</label>
                    <textarea required value={editingProject.content?.result} onChange={e => setEditingProject({...editingProject, content: {...editingProject.content!, result: e.target.value}})} className="w-full border border-neutral-200 dark:border-neutral-800 p-2 text-sm bg-background h-24" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button type="submit" className="px-6 py-2 bg-primary text-white font-mono text-[10px] uppercase font-bold hover:bg-neutral-800 transition-colors">
                  Save Project
                </button>
                <button type="button" onClick={() => setEditingProject(null)} className="px-6 py-2 border border-neutral-200 dark:border-neutral-800 font-mono text-[10px] uppercase font-bold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="mb-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h2 className="font-mono text-md uppercase font-bold">Projects</h2>
                <button 
                  onClick={() => setEditingProject(defaultProject)}
                  className="px-4 py-2 bg-primary text-white font-mono text-[10px] uppercase font-bold hover:bg-neutral-800 transition-colors"
                >
                  + New Project
                </button>
              </div>
              <div className="flex justify-end">
                 <button 
                  onClick={async () => {
                    try {
                      const { seedProjects } = await import('@/lib/seed');
                      await seedProjects();
                    } catch (e) {
                      handleFirestoreError(e, OperationType.WRITE, 'projects');
                    }
                  }}
                  className="px-3 py-1 border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-foreground hover:border-foreground font-mono text-[10px] uppercase font-bold transition-colors"
                >
                  Seed Sample Data
                </button>
              </div>
            </div>
            
            <div className="border border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-950">
              {projects.length === 0 && <div className="p-8 text-center text-sm font-mono uppercase text-neutral-500">No projects found. Seed or create one.</div>}
              {projects.map(p => (
                <div key={p.id} className="p-4 flex justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                  <div>
                    <div className="font-bold text-sm tracking-tight">{p.title}</div>
                    <div className="text-[10px] font-mono uppercase text-neutral-500 mt-1">{p.category} // {p.id}</div>
                  </div>
                  <div className="flex gap-4 font-mono text-[10px] uppercase font-bold">
                    <button onClick={() => setEditingProject(p)} className="hover:text-primary transition-colors">Edit</button>
                    <button onClick={() => handleDelete(p.id)} className="hover:text-red-500 transition-colors">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
