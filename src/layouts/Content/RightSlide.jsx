import { useDispatch, useSelector } from "react-redux";
import Editor from "@monaco-editor/react";
import { updateCode } from "../../features/tabs";

export default function RightSide({ showPreview }) {
    const dispatch = useDispatch();
    const { tabsFocus, tabList } = useSelector((state) => state.tabs);

    function handleEditorChange(newValue, e) {
        dispatch(updateCode(newValue));
    }

    return (
        <div className="w-full relative bg-[#1e1e1e]">
            {/* <textarea
                value={tabList[tabsFocus].content}
                onKeyDown={handleKeyDown}
                onChange={(e) => dispatch(updateCode(e.target.value))}
                spellCheck="false"
                className="bg-zinc-900 text-slate-200 text-xl p-8 block min-h-full w-full focus:outline-none resize-none"
            ></textarea> */}
            <Editor
                language={tabList[tabsFocus].language}
                value={tabList[tabsFocus].content}
                onChange={handleEditorChange}
                theme="vs-dark"
                className="py-3"
            />
            {showPreview && (
                <div className="absolute top-0 left-0 w-full h-full bg-zinc-100">
                    <iframe
                        sandbox="allow-scripts"
                        className="block w-full h-full"
                        srcDoc={`
                        <!DOCTYPE html>
                        <html>
                          <head>
                            <style>${tabList[1].content}</style>
                          </head>
                          <body>
                            ${tabList[0].content}
                            
                            <script>${tabList[2].content}</script>
                          </body>
                        </html>
                        `}
                    ></iframe>
                </div>
            )}
        </div>
    );
}
