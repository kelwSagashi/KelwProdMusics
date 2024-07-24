import React, { useEffect, useState } from "react"

const Lyrics: React.FC<{ lyrics: string }> = ({ lyrics }) => {
    const [lyricsComponet, setLyricsComponent] = useState<React.ReactNode>();
    useEffect(() => {
        const sections: React.ReactNode = lyrics.split('\n\n').map((section, i) => {
            const lines: React.ReactNode = section.split('\n').map((line, j) => (
                <p key={j}>{line}</p>
            ));
            return (
                <div key={i}>
                    {lines}
                </div>
            )
        });

        setLyricsComponent(sections);
    }, [lyrics]);

    return (
        <div>
            {lyricsComponet}
        </div>
    )
}

export default Lyrics