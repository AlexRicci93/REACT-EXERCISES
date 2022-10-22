import React, { useContext } from "react";
import { LanguageContext } from "./Language";

const translation={

    en: {

        message: "Hi I'm Alex"

    },

    it: {

        message: "Ciao sono Alex"

    }
    
}


export function DisplayLanguage() {

    const language = useContext(LanguageContext)

        return (
            
        
                    <h1>{translation[language].message}</h1>
                 
            
        )
 
}