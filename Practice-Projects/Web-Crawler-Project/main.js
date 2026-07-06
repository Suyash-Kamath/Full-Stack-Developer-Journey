const { crawlPage } = require('./crawl.js');
const { printReport } = require('./report.js');

async function main() {
    // Check for missing URL
    if (process.argv.length < 3) {
        console.log("No website provided");
        process.exit(1);
    }

    // Check for too many arguments
    if (process.argv.length > 3) {
        console.log("Too many command line arguments");
        process.exit(1);
    }

    const baseURL = process.argv[2];
    console.log("Starting crawl of " + baseURL);

    try {
        const pages = await crawlPage(baseURL, baseURL, {});

        // Uncomment this block to log all crawled pages and their counts
        // for (const page of Object.entries(pages)) {
        //     console.log(page);
        // }

        printReport(pages);
    } catch (err) {
        console.error("Error during crawl:", err);
    }
}

main();
