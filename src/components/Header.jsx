import view from "../assets/view.svg";
import hide from "../assets/hide.svg";

export default function Header({ showPreview, setShowPreview }) {
    return (
        <header className="w-full h-20 bg-zinc-900 text-slate-100 flex justify-between items-center border-b border-gray-100">
            <h1 className="ml-4">
                <span>Dev</span>
                <span className="text-2xl">CraftHub</span>
            </h1>
            <button
                onClick={setShowPreview}
                className="h-10 bg-blue-700 flex px-4 py-1 rounded items-center hover:bg-blue-800"
            >
                <img
                    src={showPreview ? hide : view}
                    alt="icon show preview"
                    className="h-5 mr-3"
                />
                <span>{showPreview ? "Hide" : "Show"} Preview</span>
            </button>
            <div className="h-7 w-4 flex flex-col justify-between items-center cursor-pointer px-3 mr-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-100"></span>
            </div>
        </header>
    );
}
