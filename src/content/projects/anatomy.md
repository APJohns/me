---
title: Anatomy
company: Boston Scientific
description: Boston Scientific's design system and component library
techStack: [React, Typescript, GraphQL, Contentful CMS, Storybook, Jest, Vite]
thumbnail: '@/images/anatomy.jpg'
screenshot: '@/images/screenshots/anatomy.webp'
links:
  [
    [site, https://anatomydesignsystem.netlify.app],
    [storybook, https://anatomy-storybook.netlify.app],
    [code, https://github.com/APJohns/anatomy-react],
  ]
sortOrder: 3
---

As a Senior UX Frontend Developer at Boston Scientific, my primary role was developing the internal design system known as Anatomy. It was my job to determine the tech stack and set up the projects and build processes. We currently have multiple projects and npm packages that I played a primary role in building up.

- Tokens (npm package): Design tokens compiled into multiple languages including CSS, Sass, Less, JSON, and JSON.
- Component Library (npm package) - Components built in React with TypeScript, documented in Storybook, and tested with Jest unit tests. The package is built with Vite, and the Storybook is hosted through Chromatic.
- Documentation Site: Create React App hosted on Netlify used to document foundations and guidelines for using the design system. We use GraphQL to pull contents from our CMS, Contentful.
- Linter Configs (npm package): Configs for ESLint, Style Lint, and Prettier.

CI/CD is built into all of the projects using various hosts that hook into the repository and GitHub Actions to automate anything from linting to publishing. We are a small team, so I'm always looking for ways to automate our process where I can.

One of my more recent projects included advocating for the creation of a research task and following implementation tasks to look into how our team can improve the web sustainability of our products and offerings. This involved using an API to measure the estimated CO2 emissions of our pages, storing that data in a Mongo database, and presenting it in a dashboard.

Anatomy was designed and built to be user-centered, accessible, sustainable, flexible, and intuitive. We strived to meet WCAG 2.1 AAA, with a minimum requirement of WCAG 2.0 AA.

Anatomy presented many learning opportunities to further my frontend development skills. We implemented Jest and Cypress for testing. This was my first exposure to writing tests on a production level. It was a fantastic learning opportunity and greatly enhanced our codebase and my code writing abilities.

I was also given multiple leadership responsibilities within Boston Scientific.

- Acted as a mentor to newer developers as our team grew.
- Paired with developers from other teams to assist in implementing Anatomy within the various sites under Boston Scientific's domain.
- Gave code reviews and paired with developers on frontend work.
- Contributed to the documentation around best practices in our code standards.
- Prioritized tasks and contributed to the roadmap.
