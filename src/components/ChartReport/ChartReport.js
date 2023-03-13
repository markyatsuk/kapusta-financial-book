import React from 'react';
import s from './ChartReport.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

export default function ChartReport({
  category,
  expensesReport,
  incomeReport,
  title,
  hasChanged,
}) {
  //   const chartbar = document.querySelector("svg[role='img']");
  //   console.log(chartbar)
  //   if (chartbar) {
  // chartbar.style.width = "100%";
  //     chartbar.style.height = "100%";
  //     chartbar.style.margin = "0 auto";
  //     chartbar.style.display = "block";
  //   }
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
    } else {
      chosenCategory = incomeReport ? incomeReport[0] : [];
    }
  }
  let elArray = [];
  let nameArray = [];
  let pricesArray = [];

  const newData = chosenCategory?.data
    ? chosenCategory?.data.filter(
        (value, index, self) =>
          self.findIndex(v => v.subCategory === value.subCategory) === index,
      )
    : [];

  let filteredData = [];

  // eslint-disable-next-line array-callback-return
  newData.map(elem => {
    const b = chosenCategory?.data.filter(
      element => element.subCategory === elem.subCategory,
    );
    let newSum = b.reduce((total, el) => {
      return total + el.sum;
    }, 0);
    filteredData.push({ subCategory: elem.subCategory, sum: newSum });
  });

  const sortedData = filteredData.sort((a, b) => b.sum - a.sum);

  if (sortedData) {
    for (let i = 0; i < sortedData.length; i++) {
      elArray.push(i);
      nameArray.push(sortedData[i].subCategory);
      pricesArray.push(sortedData[i].sum);
    }
  }
  return (
    <div className={s.chartContainer}>
      {sortedData.length !== 0 && sortedData && (
        <VictoryChart
          domainPadding={100}
          // theme={VictoryTheme.material}
        >
          <VictoryAxis tickValues={elArray} tickFormat={nameArray} />
          <VictoryAxis dependentAxis />
          <VictoryBar
            data={sortedData}
            y="sum"
            x="subCategory"
            labels={pricesArray}
            barRatio={0.5}
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
