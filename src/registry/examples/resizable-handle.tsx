import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function ResizableHandleExample() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-48 w-full max-w-lg rounded-lg border"
    >
      <ResizablePanel defaultSize="30%" minSize="20%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="40%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Editor</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="60%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
