---
title: Greener Web
company: Side Project
description: Web sustainability tool and dashboard
techStack: [Next.js, Typescript, Hono, Node.js, Supabase]
thumbnail: '@/images/greener-web.png'
screenshot: '@/images/screenshots/greener-web.webp'
links:
  [
    [site, https://greenerweb.dev],
    [code, https://github.com/APJohns/greenerweb],
    [api code, https://github.com/APJohns/greenerweb-api],
  ]
sortOrder: 4
---

The internet is responsible for 2-5% of global emissions. That’s more than the aviation industry! This has spurred a web sustainability movement. Greener Web is one way that I am trying to contribute to that movement. Greener Web is a web sustainability metrics tool. In its current form, you can enter in a URL to generate a report for the estimated emissions per visit to that page. You can learn more about [how it works](https://greenerweb.dev/how-it-works) on the site. I’m working on some really exciting additions to this site, so be sure to tune back here in the near future.

![Example of a Greener Web Report](@/images/screenshots/greener-web-report.webp)

## The Backend

The backend is an API built with Node.js and Hono, hosted on Render. Its primary endpoint takes in a URL and returns the data needed for the report. It’s a pretty straightforward REST API with auth tokens. It first validates the token and URL, then spins up a headless browser using Puppeteer. It then navigates to the URL and intercepts the responses, measuring the size of the files transferred. That value then gets fed into the Sustainability Web Model via the co2.js package. The URL is also sent to The Green Web Foundation’s green-check API to determine the green factor of the hosting server. Those values are then sent back to the user via a response.

I chose Hono for a few reasons. I wanted to strengthen my Node.js skillset, and Hono is a great tool in that ecosystem. With a similar structure to Express.js, but faster and more performant, with better TypeScript support, some exciting modern features, and standards.

### co2.js

When I first began this project, I implemented the model locally. While the basic model was fairly straightforward to implement, maintaining it would be more challenging. The model depends on global data from electrical grids and their percent of renewable resources. This led me to reach for the [co2.js package](https://www.thegreenwebfoundation.org/co2-js/), which tracks these values and uses them in their model. This would allow me to focus on the project and not worry about tracking this data myself, leaving that to a dedicated team. It was also nice to see that the values I was getting from my implementation matched exactly with what co2.js was giving me.

## The Frontend

The frontend is a Next.js application using the app router and utilizes server-side rendering (SSR) hosted on Vercel. The landing page is Google-esque input with URL validation. There’s also a link to explain how the report is generated. On entry of the URL, the app router loading state is triggered while an API request is made to the backend. Once that data comes back, the report is shown. The frontend is pretty simple in this first phase of the project. There’s a lot more to come that I’m excited to share when it’s ready!

I have loved working with Next.js in the past, making the decision to use it for this project an easy one. The developer experience is fantastic, with so many great features like SSR which allowed me to make an API call without revealing the auth token. It’s also quickly taking over as one of the dominant React meta-frameworks, making it a strong tool to add to my belt.
