import React from 'react'
import CsvParse from '@vtex/react-csv-parse'

export default function ImportCSV({addItems}) {
    return <div className="csv-picker">
    
      <div>
      <p style={{textAlign: 'left'}}>Upload items via CSV file</p>
      <CsvParse
      keys={['item']}
      separators={[',', ';']}
      onDataUploaded={data => addItems(data)}
      render={onChange => <input type="file" onChange={onChange} />}
    />
      </div>
    </div>
}