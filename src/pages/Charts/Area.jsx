import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts'
import { Header } from '../../components'

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {
  
  const {currentMode}=useStateContext();

  return (
    <div className='p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Area" title="Inflation Rate in Percentage" />
      <ChartComponent 
      id='area-chart'
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border:{ width: 0 }}}
      background={currentMode==='Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index)=>
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area