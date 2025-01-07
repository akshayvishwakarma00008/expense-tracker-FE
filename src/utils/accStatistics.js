const calTransaction = arr => {
  const tranArr = arr?.length > 0 ? arr?.map(data => data?.amount) : 0;
  const sum = arr?.length > 0 ? arr
    ?.map(inc => inc?.amount)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0) : 0;
  const avg = arr?.length > 0 ?sum / arr?.length : 0;
  const min = tranArr ? Math.min(...tranArr) : 0;
  const max = tranArr ? Math.max(...tranArr) : 0;
  return {
    sumTotal: sum,
    avg,
    min,
    max,
  };
};

export default calTransaction;