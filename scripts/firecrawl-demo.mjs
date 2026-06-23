import Firecrawl from '@mendable/firecrawl-js';

// Retrieve the API key from environment variables or use a placeholder
const apiKey = process.env.FIRECRAWL_API_KEY || 'fc-YOUR_API_KEY';

if (apiKey === 'fc-YOUR_API_KEY') {
  console.warn('Warning: Using placeholder API key. Set the FIRECRAWL_API_KEY environment variable to use your actual key.\n');
}

const app = new Firecrawl({ apiKey });

async function runDemo() {
  try {
    console.log('--- 1. Scrape a single URL ---');
    console.log('Scraping https://firecrawl.dev ...');
    const doc = await app.scrape('https://firecrawl.dev', { formats: ['markdown'] });
    console.log('Scraped document markdown content preview:');
    console.log(doc.markdown ? doc.markdown.substring(0, 500) + '\n...' : 'No markdown returned');

    console.log('\n--- 2. Use Agent for autonomous data gathering ---');
    console.log('Querying Agent for "Find the founders of Stripe" ...');
    const result = await app.agent({ prompt: 'Find the founders of Stripe' });
    console.log('Agent query result:', result.data);

    console.log('\n--- 3. Crawl a website ---');
    console.log('Crawling https://docs.firecrawl.dev (limit 50) ...');
    const docs = await app.crawl('https://docs.firecrawl.dev', { limit: 50 });
    console.log(`Crawl completed. Found ${docs.data?.length || 0} pages.`);
    docs.data?.slice(0, 5).forEach((doc, idx) => {
        console.log(`[${idx + 1}] ${doc.metadata?.sourceURL || 'Unknown URL'}: ${doc.markdown ? doc.markdown.substring(0, 100) : ''}...`);
    });

    console.log('\n--- 4. Search the web ---');
    console.log('Searching the web for "best web scraping tools 2024" ...');
    const results = await app.search('best web scraping tools 2024', { limit: 10 });
    results.data?.web?.forEach((result, idx) => {
        console.log(`${idx + 1}. ${result.title}: ${result.url}`);
    });
  } catch (error) {
    console.error('Error running Firecrawl demo:', error.message || error);
  }
}

runDemo();
