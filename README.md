This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next Flavor

This is a tutorial project to learn a little bit more about Next.js builds.

## Pre-requisite

```bash
npm i
```

We'll work with production builds because dev builds are optimized for development speed and not for final performance (minification, code split, ...)

## 1 - Webpack analyzer

Build the project for production.

```bash
npm run build
```

This will open the webpack analyzer for the client bundles. Typically we don't care about the server bundles because they are running locally.

Go back to the build console and have a look at the output. Next.js already provides some information about the client bundles. Notice the `/` and `/404` pages (our only pages) and their size. Notice the bundles the are shared by all pages. The total size of each page is their own size plus the shared load.

Go back the the webpack analyzer page and notice the different bundles. Explore a little bit to find out what the bundles actually contain.

What is the largest JS dependency across all bundles? The second one?  
Find the bundle specific to our index page. What are the dependencies?  
Find the bundle specific to our 404 page.

## 2 - Run the build

```bash
npm run start
```

Open http://localhost:3000 in incognito mode.

Can you spot the usage of the largest dependency for this page only?

## 3 - Run the lighthouse report

Open the lighthouse tab in Chrome dev tools.  
Generate a performance report.

What is the performance score?

## 4 - lodash

Stop the server.  
Install lodash.

```
npm i lodash @types/lodash
```

Import lodash in the index page.

```
import lodash from "lodash";
```

Add a line where you use a lodash function in the render function.

Build the app. Notice the bundle size in the console report. Find lodash in the webpack analyzer.  
Run the server and the lighthouse report. Do you notice any difference?

Bonus exercise: fix the lodash import to minimize the bundle.

> Example implementation in the `lodash` branch.

## 5 - code splitting

Dynamically import lodash in the render function using Webpack. See [Docs](https://webpack.js.org/guides/code-splitting/#dynamic-imports).  
Build the app.

Can you find the dedicated bundle for lodash in the analyzer?

Run the app and open the network tab.  
Can you see the request for the lodash code?

> Example implementation in the `code-split` branch.

## 6 - getServerSideProps

In the index page, add a `getServerSideProps` export and move your lodash function from the rendering to that function. Return the result of your lodash function as props:

```
  {
    props: {
      yourProp: theResult,
    },
  }
```

Run the build again. What do you notice?  
Run the server and open the page. Inspect the html and find the JSON script with the id `__NEXT_DATA__`.  
Notice you can find your props there.

Go to https://json-generator.com/ and generate some big props! Don't be shy you really need A LOT!  
Return those in the `getServerSideProps`.  
Inspect the JSON script, also check the size of the HTML request in the network tab, and run the lighthouse performance.

> Example implementation in the `getServerSideProps` branch.

## Going beyond

Try the same tutorial with [the new `app` directory](https://beta.nextjs.org/docs/getting-started).  
Use the `main-app` branch to get started and implementations are in other `*-app` branches.  
Good luck!

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
