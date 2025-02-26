'use client';

import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

import { themeQuartz } from 'ag-grid-community';

// to use myTheme in an application, pass it to the theme grid option
const myTheme = themeQuartz.withParams({
    fontFamily: 'inherit',
});

export default function Home() {
    const [rowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 },
    ]);

    const [columnDefs] = useState<ColDef[]>([
        { field: 'make', flex: 1 },
        { field: 'model', flex: 1 },
        { field: 'price', flex: 1 },
    ]);

    return (
        <div style={{ flexGrow: 1, width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                theme={myTheme}
            />
        </div>
    );
}
