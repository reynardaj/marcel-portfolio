import { getDocs, collection, doc, getDoc, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';
import { seedProjects } from './seed';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  content?: {
    overview: string;
    problem: string;
    approach: string[];
    result: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export const categories = ['All', 'Design Engineering', 'Product Design', 'Full-stack Engineering', '3D Web Experience'];

export async function getProjects(): Promise<Project[]> {
  try {
    const projQuery = query(collection(db, 'projects'), orderBy('createdAt', 'asc'));
    const snapshot = await getDocs(projQuery);
    
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
  } catch (error) {
    if (error instanceof Error && error.message.includes('offline')) {
       console.error("Firebase fetched failed offline");
       return [];
    }
    throw error;
  }
}

export async function getProject(id: string): Promise<Project | null> {
  try {
    const docRef = doc(db, 'projects', id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) return null;
    return { id: snapshot.id, ...snapshot.data() } as Project;
  } catch (error) {
    console.error("Firebase fetched failed", error);
    return null;
  }
}

