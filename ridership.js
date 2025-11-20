// src/data/ridership.js

// Annual CATS light-rail unlinked passenger trips.
// Values are in **millions** to keep the chart readable.

export const ridershipActuals = [
  { year: 2018, value: 7.10 },   // 7,100,000
  { year: 2019, value: 8.01 },   // 8,006,852
  { year: 2020, value: 0.01 },   // Service heavily disrupted during COVID-19
  { year: 2021, value: 2.60 },   // 2,599,631
  { year: 2022, value: 3.88 },   // 3,878,989
  { year: 2023, value: 5.08 },
  { year: 2024, value: 6.34 },   // 5,084,602
];

// Simple projections based on a linear fit to 2021–2023 recovery.
// These are in **millions** as well.
export const ridershipProjections = [
  { year: 2024, projected: 6.34 },
  { year: 2025, projected: 7.58 },  // passes the 2018 baseline ~7.1M
  { year: 2026, projected: 8.82 },
  { year: 2027, projected: 10.07 },
  { year: 2028, projected: 11.31 },
  { year: 2029, projected: 12.55 },
  { year: 2030, projected: 13.79 },
];
