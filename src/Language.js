import React, { createContext } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

export const LanguageContext =  createContext('en')

export class Language extends React.Component {

    render() {

        return(
            
            <>
            <LanguageContext.Provider>
            <DisplayLanguage/>
            </LanguageContext.Provider>
            <select>
            <option value="en">English</option>
            <option value="it">Italiano</option>
            </select>
            
            </>
        )
    }
}