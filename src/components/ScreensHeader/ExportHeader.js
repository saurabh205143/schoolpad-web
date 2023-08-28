import React, { useState } from 'react'
import { ButtonContainer, ContainerLeft, ContainerRight, ExportContainer, ExportHeadings } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import * as XLSX from 'xlsx';
import ReactDOM from 'react-dom';
// Assets
import Button from '../Buttons/Button';
import PrintTable from '../PrintTemplate/PrintTemlate';

const ExportHeader = ({ smallHeading, smallHeding2, Excelicon, PrintIcon, deleteStoreText, isChecked, data }) => {
    
    const handleExcelClick = () => {
    // console.log({data})
    const getData = data.rows.map(row => {
      const rowData = {};
        data.column.forEach(col => {
            if (typeof row[col.field] != 'object' && row[col.field] != null) {
                rowData[col.name] = row[col.field];
            }
      });
      return rowData;
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(getData);
    const columnWidths = [
    { wpx: 100 },
    { wpx: 200 }, 
    { wpx: 150 }, 
    ];

    ws['!cols'] = columnWidths;
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const blob = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' })], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'export.xlsx';
    link.click();

    URL.revokeObjectURL(url);
  };

  const handlePrintClick = () => {
    const printWindow = window.open('', '_blank');
    const printComponent = (
      <PrintTable columns={data.column} rows={data.rows} />
    );

    const printDocument = (
      <div>
            {printComponent}
             <style>
          {`
            th {
              background-color: #f2f2f2;
            }
            .pageBreak {
            display: block;
            page-break-before: always;
          }
            table, tr, td {font - family: arial;}
          `}
        </style>

      </div>
    );

    ReactDOM.render(printDocument, printWindow.document.body);
    };
    
    return (
        <ExportContainer>
            <ContainerLeft>
                <ExportHeadings>
                    <Headings smallHeading={smallHeading} />
                </ExportHeadings>
                <ExportHeadings>
                    <Headings smallHeading={smallHeding2} />
                </ExportHeadings>
            </ContainerLeft>
            
                <ContainerRight>
                    {deleteStoreText &&
                    <ButtonContainer>
                            <Button
                                buttonText={deleteStoreText}
                                className='delete'
                            />
                        
                    </ButtonContainer>
}
                    {Excelicon && PrintIcon &&
                    <>
                    <ButtonContainer>
                        <Button
                            onlyIcon={Excelicon}
                            className={'only-icon-button'}
                            tooltiptext='Excel'
                            onClick={handleExcelClick}
                        />
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            onlyIcon={PrintIcon}
                            className={'only-icon-button'}
                            tooltiptext='Print'
                            onClick={handlePrintClick}
                        />
                    </ButtonContainer>
                    </>
                    }
            </ContainerRight>
            
        </ExportContainer>
    )
}

export default ExportHeader;