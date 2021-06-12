import {DataGrid, GridToolbar} from '@material-ui/data-grid';
import columns from './cols';

const ResultsDataGrid = ({results}) => {
    const rows = results.map(item => {
        return {
            id: item.id,
            name: item.name,
            score: item.score
        }
    });

    return (
        <div
          style={{
            minWidth: '310px',
            margin: '0 auto',
            marginTop: 40,
            marginBottom: 40,
            backgroundColor: 'white',
            opacity: 0.93
          }}>
          <DataGrid
            columns={columns}
            rows={rows}
            autoHeight
            showColumnRightBorder={true}
            showCellRightBorder
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
      );

}

export default ResultsDataGrid;