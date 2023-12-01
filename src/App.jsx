import { useState } from "react";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSlide from "./layouts/Content/RightSlide";

function App() {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <div className="bg-zinc-900 min-h-screen flex flex-col">
            <Header
                showPreview={showPreview}
                setShowPreview={() => setShowPreview(!showPreview)}
            />
            <main className="flex grow">
                <LeftSide setShowPreview={() => setShowPreview(false)} />
                <RightSlide showPreview={showPreview} />
            </main>
        </div>
    );
}

export default App;
