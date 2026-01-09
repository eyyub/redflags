import { useState } from 'react';
import { TabBar, TabType } from './components/TabBar';
import { MyFlags } from './screens/MyFlags';
import { Discover } from './screens/Discover';
import { Debrief } from './screens/Debrief';
import { Insights } from './screens/Insights';
import { Settings } from './screens/Settings';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('flags');

  const renderScreen = () => {
    switch (activeTab) {
      case 'flags':
        return <MyFlags />;
      case 'discover':
        return <Discover />;
      case 'debrief':
        return <Debrief />;
      case 'insights':
        return <Insights />;
      case 'settings':
        return <Settings />;
      default:
        return <MyFlags />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      <div className="max-w-4xl mx-auto">
        {renderScreen()}
      </div>
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
