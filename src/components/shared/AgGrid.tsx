'use client';

import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, ColDef } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';

// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

export default function Home() {
    const [rowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 },
    ]);

    const [columnDefs] = useState<ColDef[]>([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
    ]);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
    );
}
