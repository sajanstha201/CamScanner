import axios from "axios"
import { OneDayHistory } from "./OneDayHistory"
import { PdfConversionHistory } from "./PdfConversionHistory"
import { TableExtractionHistory } from "./TableExtractionHistory"
import { DocumentAnalysisHistory } from "./DocumentAnalysisHistory"

export const HistoryMainPage=()=>{
    return(
        <div className=" flex justify-center min-h-[80vh] w-full p-2 bg-gray-100">        
            <div className="flex flex-col items-center w-[80%] p-2 bg-gray-100">
                <PdfConversionHistory/>
                <PdfConversionHistory/>
                <PdfConversionHistory/>
            </div>
        </div>

    )
}
