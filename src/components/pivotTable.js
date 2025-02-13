import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  ValidationModule,
  createGrid,
} from "ag-grid-community";
import {
  ColumnMenuModule,
  ColumnsToolPanelModule,
  ContextMenuModule,
  FiltersToolPanelModule,
  PivotModule,
  RowGroupingPanelModule,
} from "ag-grid-enterprise";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnsToolPanelModule,
  ColumnMenuModule,
  ContextMenuModule,
  PivotModule,
  FiltersToolPanelModule,
  RowGroupingPanelModule,
  ValidationModule /* Development Only */,
]);

// ModuleRegistry.registerModules([
//   ClientSideRowModelModule,
//   PivotModule,
//   SideBarModule,
//   ColumnsToolPanelModule,
//   RowGroupingPanelModule,
// ]);

function PivotTable({ arrHeaders, data, valores }) {
  const columnDefs = valores.map((field, index) => ({
    field: field,
    headerName: arrHeaders[index] || field,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    flex: 1,
  }));
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 130,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
      pinned: "left",
    };
  }, []);

  return (
    <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          pivotMode={true}
          sideBar={"columns"}
          pivotPanelShow={"always"}
          onGridReady={true}
        />
  );
}

export default PivotTable;