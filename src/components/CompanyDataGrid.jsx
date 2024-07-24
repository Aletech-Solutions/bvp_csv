import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'Rank', headerName: 'Rank', width: 150 },
    { field: 'Domain', headerName: 'Domain', width: 200 },
    { field: 'Website', headerName: 'Website', width: 200 },
    { field: 'Roles', headerName: 'Roles', width: 150 },
    { field: 'Description', headerName: 'Description', width: 300 },
    { field: 'Industry', headerName: 'Industry', width: 150 },
    { field: 'Tags', headerName: 'Tags', width: 300 },
    { field: 'Specter_Organization_ID', headerName: 'Specter Organization ID', width: 250 },
    { field: 'Last_Updated', headerName: 'Last Updated', width: 200 },
    { field: 'Company_Name', headerName: 'Company Name', width: 200 },
    { field: 'Operating_Status', headerName: 'Operating Status', width: 200 },
    { field: 'Primary_Role', headerName: 'Primary Role', width: 150 },
    { field: 'Founded_Date', headerName: 'Founded Date', width: 150 },
    { field: 'Growth_Stage', headerName: 'Growth Stage', width: 150 },
    { field: 'HQ_Location', headerName: 'HQ Location', width: 250 },
    { field: 'HQ_Region', headerName: 'HQ Region', width: 150 },
    { field: 'Company_Size', headerName: 'Company Size', width: 150 },
    { field: 'Employee_Count', headerName: 'Employee Count', width: 150 },
    { field: 'Web_Visits', headerName: 'Web Visits', width: 150 },
       { field: 'Top_Country', headerName: 'Top Country', width: 150 },
    { field: 'Country_Breakdown', headerName: 'Country Breakdown', width: 300 },
    { field: 'Traffic_Sources', headerName: 'Traffic Sources', width: 300 },
    { field: 'Social_Traffic_Breakdown', headerName: 'Social Traffic Breakdown', width: 300 },
    { field: 'Organic_Search_Percentage', headerName: 'Organic Search Percentage', width: 200 },
    { field: 'Paid_Search_Percentage', headerName: 'Paid Search Percentage', width: 200 },
    { field: 'Bounce_Rate', headerName: 'Bounce Rate', width: 150 },
    { field: 'Pages_per_Visit', headerName: 'Pages per Visit', width: 150 },
    { field: 'Similar_Websites_and_Similarity', headerName: 'Similar Websites and Similarity', width: 300 },
    { field: 'Website_Popularity_Rank', headerName: 'Website Popularity Rank', width: 250 },
]

const CompanyDataGrid = ({ data }) => {
  const rows = data.map((item, index) => ({
    id: index + 1,
    ...item
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
};

export default CompanyDataGrid;
