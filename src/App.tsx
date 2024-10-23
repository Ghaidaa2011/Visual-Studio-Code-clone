import RecursiveComponent from "./components/leftPanel/RecursiveComponent";
import { FileTree } from "./data/FileTree";
import ResizablePanel from "./components/ResizablePanal/ResizablePanal";
import Preview from "./components/rightPanel/Preview";
import { useAppSelector } from "./app/hooks";
import WelcomeTab from "./components/rightPanel/WelcomeTab";
const App = () => {
  const { openedFiles } = useAppSelector((state) => state.fileTree);

  return (
    <div>
      <div className="flex h-screen ">
        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent FileTree={FileTree} />
            </div>
          }
          rightPanel={openedFiles.length > 0 ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
};

export default App;
