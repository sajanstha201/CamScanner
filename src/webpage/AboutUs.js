import React from 'react';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

export const AboutUs = () => {

  const displayDoc = () => {
    const inputFiles = document.getElementById('input-doc').files;
    if (inputFiles.length === 0) {
      alert("Please select a file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      try {
        const zip = new PizZip(arrayBuffer);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
        doc.setData({
          textContent: "This is the new content inserted into the document.",
        });
        doc.render();
        const blob = doc.getZip().generate({
          type: 'blob',
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });

        saveAs(blob, 'document.docx');
      } catch (error) {
        console.error("Error processing the document:", error);
      }
    };

    reader.onerror = (error) => {
      console.log("Error reading file:", error);
    };

    reader.readAsArrayBuffer(inputFiles[0]);
  };

  return (
    <>
      <h1>This is contact us page</h1>
      <input type='file' accept=".docx,.doc" id='input-doc' />
      <button onClick={displayDoc}>Display DOCX</button>
      <div id='display-doc'></div>
    </>
  );
};

