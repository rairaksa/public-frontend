import './App.css';

import SidebarSection from './SidebarSection';
import ContentSection from './ContentSection';

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-dark-80 text-soft-white">
      <div className="flex w-4/5 min-h-full bg-dark-60">
        <SidebarSection />
        <ContentSection />
      </div>
    </div>
  )
}

export default App;
