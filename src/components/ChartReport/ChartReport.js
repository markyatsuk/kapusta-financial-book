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
  title,
  hasChanged,
}) {
  const { width } = useWindowDimensions();
  let verifyReport;
  let chosenCategory;

  if (title === 'expense') {
    verifyReport = expensesReport ?? [];
  } else {
    verifyReport = incomeReport ?? [];
  }

  hasChanged
    ? (chosenCategory = verifyReport.filter(el => el._id === category)[0])
    : checkTitle();

  function checkTitle() {
    if (title === 'expense') {
      chosenCategory = expensesReport ? expensesReport[0] : [];
      console.log(chosenCategory);
    } else {
      chosenCategory = incomeReport ? incomeReport[0] : [];
    }
  }
  let elArray = [];
  let nameArray = [];
  let pricesArray = [];

  // const filteredData = chosenCategory?.data.reduce((previousObj, obj) => {
  //   return previousObj.map(el =>
  //   {
  //     if (obj.subCategory === el.subCategory) {
  //       el.sum += obj.sum;
  //       return el;
  //     }else{
  //       previousObj.push(obj.subCategory)
  //       return el;
  //     }})

  // }, [])

  // console.log(filteredData)

  // let sum = {};

  // let abc = chosenCategory?.data.forEach((key) => {
  //   if (ob2.hasOwnProperty(key)) {
  //     sum[key] = ob1[key] + ob2[key];
  //   }
  // });
  // console.log('abc', abc)

  // const filteredData1 = chosenCategory?.data.reduce((a, b) => {
  //   for (let k in b) {
  //     if (b.hasOwnProperty(k))
  //       a[k] = (a[k] || 0) + b[k];
  //   }
  //   return a;
  // }, {});

  //  const filteredData = filteredData1.filter((value, index, self) =>
  // self.findIndex(v => v.subCategory === value.subCategory) === index
  // );

  // console.log('filteredData', filteredData1)

  if (chosenCategory?.data) {
    for (let i = 0; i < chosenCategory.data.length; i++) {
      elArray.push(i);
      nameArray.push(chosenCategory.data[i].subCategory);
      pricesArray.push(chosenCategory.data[i].sum);
    }
  }
  return (
    <div className={s.chartContainer}>
      {!Array.isArray(chosenCategory) && chosenCategory && (
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={70}
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
            barRatio={0.3}
            cornerRadius={6}
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
