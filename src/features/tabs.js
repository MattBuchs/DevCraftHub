import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";

const initialState = {
    tabList: [
        {
            id: nanoid(8),
            name: "HTML",
            language: "html",
            imgURL: html,
            content: `<div>\n\t<h1>Éditeur de code avec React</h1>\n\t<p>Codez directement sur votre navigateur.</p>\n</div>`,
        },
        {
            id: nanoid(8),
            name: "CSS",
            language: "css",
            imgURL: css,
            content: `body {\n\tfont-family: Roboto, sans-serif;\n\tpadding: 25px;\n\tcolor: #111;\n\tbackground-color: #f1f1f1;\n}`,
        },
        {
            id: nanoid(8),
            name: "JavaScript",
            language: "javascript",
            imgURL: js,
            content: `console.log("Hello World");`,
        },
    ],
    tabsFocus: 0,
};

export const tabs = createSlice({
    name: "tabs",
    initialState,
    reducers: {
        changeTab: (state, action) => {
            state.tabsFocus = action.payload;
        },
        updateCode: (state, action) => {
            state.tabList[state.tabsFocus].content = action.payload;
        },
    },
});

export const { changeTab, updateCode } = tabs.actions;
export default tabs.reducer;
