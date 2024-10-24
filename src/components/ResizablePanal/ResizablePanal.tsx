import { ReactNode, useRef } from "react";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  ImperativePanelHandle,
} from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  sidePanel: ReactNode;
  showLeftPanel: boolean;
}
const ResizablePanel = ({
  defaultLayout = [5, 30, 65],
  sidePanel,
  leftPanel,
  rightPanel,
  showLeftPanel,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  const ref = useRef<ImperativePanelHandle>(null);
  const togglePanel = () => {
    const panel = ref.current;
    if (panel) {
      if (panel.getCollapsed()) {
        panel.expand();
      } else {
        panel.collapse();
      }
    }
  };
  return (
    <>
      <PanelGroup
        direction="horizontal"
        onLayout={onLayout}
        autoSaveId="condition"
      >
        <div className=" bg-[#2a3343]" onClick={togglePanel}>
          {sidePanel}
        </div>
        {showLeftPanel && (
          <>
            <Panel
              ref={ref}
              collapsible
              defaultSize={defaultLayout[1]}
              className=" bg-[#081120]"
            >
              {leftPanel}
            </Panel>
            <PanelResizeHandle className="border-r-2 border-[#ffffff44]" />
          </>
        )}
        <Panel defaultSize={defaultLayout[2]} className="bg-[#2a3343]">
          {rightPanel}
        </Panel>
      </PanelGroup>
    </>
  );
};

export default ResizablePanel;
