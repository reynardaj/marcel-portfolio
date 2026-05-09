import { collection, doc, writeBatch, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { projects } from './projects-data'; 

export async function seedProjects() {
  const querySnapshot = await getDocs(collection(db, 'projects'));
  if (!querySnapshot.empty) {
    console.log('Projects already seeded');
    return;
  }
  
  const batch = writeBatch(db);
  projects.forEach((project) => {
    const docRef = doc(db, 'projects', project.id);
    batch.set(docRef, { ...project, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  });
  
  await batch.commit();
  console.log('Successfully seeded projects');
}
