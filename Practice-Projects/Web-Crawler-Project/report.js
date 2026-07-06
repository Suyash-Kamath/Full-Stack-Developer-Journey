function printReport(pages) {
  console.log("==================");
  console.log("REPORT");

  console.log("==================");
  const sortedPages = sortPages(pages);

  for (const sortedPage of sortedPages) {
    const url = sortedPage[0];
    const hits = sortedPage[1];
    console.log(`Found ${hits} links to a page: ${url}`);
  }
  console.log("==================");
  console.log("END REPORT");

  console.log("==================");
}

function sortPages(pages) {
  const pagesArr = Object.entries(pages);
  // a and b represents two individual entries in the pages array  , two individual arrays
  pagesArr.sort((a, b) => {
   
    // comapre function returns a number and because we want to sort from greatest to short , so return this
    return b[1] - a[1];
    // way the sort function works is whether its given a positive or negative return value is how it sorts all of the individual entries of the array
  });
  return pagesArr;
}

module.exports = {
  sortPages,
  printReport,
};
