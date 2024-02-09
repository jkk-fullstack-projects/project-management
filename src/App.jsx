import Sidebar from './assets/components/UserInterface/Sidebar.jsx';
import ProjectContextProvider from './store/project-context.jsx';
import ProjectDetails from './assets/components/ProjectHandling/ProjectDetails.jsx';

function App() {

  return (
    <ProjectContextProvider>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <ProjectDetails />
      </main>
    </ProjectContextProvider>
  );
}

export default App;
