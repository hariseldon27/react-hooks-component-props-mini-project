import React from "react";
import MinsToRead from "./MinsToRead"


function Article({ 
    title, 
    date = "January 1, 1970" , 
    preview, 
    minutes}) {
        return (
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
                <span>
                    <MinsToRead mins={minutes} />
                </span>
            </article>
        )
        }

export default Article