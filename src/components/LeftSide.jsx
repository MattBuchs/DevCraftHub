import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../features/tabs";

export default function LeftSide({ setShowPreview }) {
    const dispatch = useDispatch();
    const tabs = useSelector((state) => state.tabs.tabList);

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
        <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
            {tabs.map((obj, index) => (
                <button
                    key={obj.id}
                    onClick={(e) => {
                        dispatch(changeTab(index));
                        setShowPreview();
                        setSelectedTabIndex(index);
                    }}
                    className="flex items-center px-5 py-3 hover:bg-slate-600 border-b border-gray-300/10 focus:bg-slate-600 outline-none"
                >
                    <img src={obj.imgURL} alt="" className="w-5" />
                    <span
                        className={`ml-3 text-md${
                            selectedTabIndex === index
                                ? " text-lime-300"
                                : " text-slate-100/75"
                        }`}
                    >
                        {obj.name}
                    </span>
                </button>
            ))}
        </div>
    );
}
