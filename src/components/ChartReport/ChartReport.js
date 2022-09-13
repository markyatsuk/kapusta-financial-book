import React from 'react';
import s from './ChartReport.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

export default function ChartReport({
  month,
  year,
  category,
  expensesReport,
  incomeReport,
}) {
  const { width } = useWindowDimensions();
  const [chosenCategory] = expensesReport.filter(el => el._id === category);
  let elArray = [];
  let nameArray = [];
  let pricesArray = [];
  if (chosenCategory?.data) {
    for (let i = 0; i < chosenCategory.data.length; i++) {
      elArray.push(i);
      nameArray.push(chosenCategory.data[i].subCategory);
      pricesArray.push(chosenCategory.data[i].sum);
    }
  }
  return (
    <div className={s.chartContainer}>
      {chosenCategory && (
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={30}
        >
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={elArray}
            tickFormat={nameArray}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
          />
          <VictoryBar
            data={chosenCategory.data}
            y="sum"
            x="subCategory"
            labels={pricesArray}
            barRatio={0.6}
            cornerRadius={8}
            horizontal={width < 768}
            style={{
              data: { fill: '#FF751D' },
            }}
          />
        </VictoryChart>
      )}
    </div>
  );
}
