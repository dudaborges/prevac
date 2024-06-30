import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import { format } from 'date-fns';

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

    doc.save('dashboard.pdf');
  };

  return (
    <button className="Button-export" onClick={handleExportPDF}>
      Exportar como PDF
    </button>
  );
};

export default ExportPDFButton;
