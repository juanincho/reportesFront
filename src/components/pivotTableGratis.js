import React from "react";
import * as WebDataRocksReact from "@webdatarocks/react-webdatarocks";

function PivotTableGratis({ arrHeaders, data, valores }) {
    const reportJson = {
        dataSource: {
            data
        }
    }
  return (
    <WebDataRocksReact.Pivot
        toolbar={true}
        report={reportJson}
      />
  );
}

export default PivotTableGratis;