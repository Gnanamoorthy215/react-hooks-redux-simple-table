export const statusFilter = (status) => {
    return {
      type: "FILTER_BY_STATUS",
      status: status
    }
};

export const setTableData = (tableData) => {
    return {
      type: "SET_TABLE_DATA",
      payload: tableData
    }
};