import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import { format } from 'date-fns';
import "../ButtonPDF/ExportPDFButton.css"
import { FaFilePdf } from "react-icons/fa6";

const ExportPDFButton = ({ datas }) => {
  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [['Id', 'Pressure', 'Temperature', 'Status', 'Data']],
      body: datas.map(item => [
        item.id,
        item.pressure,
        item.temperature,
        item.status,
        format(new Date(item.timestamp), 'dd/MM/yyyy HH:mm:ss')
      ])
    });

    doc.save('relatorio.pdf');
  };

  return (

    <div className='elemento'>
        <FaFilePdf className="Button-export" onClick={handleExportPDF}/>
        <span class="texto-hover">Exportar como PDF</span>
    </div>
  );
};

export default ExportPDFButton;
