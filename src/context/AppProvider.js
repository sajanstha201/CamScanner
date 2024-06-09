import React,{ useContext,useState,createContext } from "react";
const PdfConversionContext=createContext();
const TableExtractionContext=createContext();
const DocumentAnalysisContext=createContext();
export const AppProvider=({children})=>{
    const [pdfConversionFile,setPdfConversionFile]=useState({'inputFiles':[],'result':[]})
    const [tableExtractionFile,setTableExtractionFile]=useState({'inputFiles':[],'result':[]})
    const [documentAnalysisFile,setDocumentAnalysisFile]=useState({'inputFiles':[],'result':[]})
    return(
        <PdfConversionContext.Provider value={{pdfConversionFile,setPdfConversionFile}}>
            <TableExtractionContext.Provider value={{tableExtractionFile,setTableExtractionFile}}>
                <DocumentAnalysisContext.Provider value={{documentAnalysisFile,setDocumentAnalysisFile}}>
                    {children}
                </DocumentAnalysisContext.Provider>
            </TableExtractionContext.Provider>
        </PdfConversionContext.Provider>
    );
};
export const usePdfConversionFile=()=>useContext(PdfConversionContext)
export const useTableExtractionFile=()=>useContext(TableExtractionContext)
export const useDocumentAnalysisFile=()=>useContext(DocumentAnalysisContext)