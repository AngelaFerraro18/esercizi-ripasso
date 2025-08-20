import { useMemo, useRef, useState } from "react";


function fakeParseMarkdown(md) {
    // Simula lavoro pesante
    const start = performance.now();
    let out = md;
    for (let i = 0; i < 30000; i++) out = out.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    console.log("parse ms:", performance.now() - start);
    return out;
}


export default function MarkdownPlayground() {
    const [text, setText] = useState("Scrivi **grassetto** qui...");
    const [fontSize, setFontSize] = useState(16);
    const renders = useRef(0); renders.current++;


    // TODO: memoizza l'HTML derivato da text
    const html = useMemo(() => fakeParseMarkdown(text), [text]);


    return (
        <div>
            <p>Render count: {renders.current}</p>
            <textarea value={text} onChange={e => setText(e.target.value)} rows={6} cols={40} />
            <div>
                Font: <input type="range" min={12} max={32} value={fontSize} onChange={e => setFontSize(+e.target.value)} />
            </div>
            <div style={{ fontSize }} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}