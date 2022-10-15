import React from "react";
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

        return (
            
            <LanguageContext.Consumer>

               {language => {
                return(
                    <h1>{translation[language].message}</h1>
                )
               }} 
            </LanguageContext.Consumer>
            
        )
 
}