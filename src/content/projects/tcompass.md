---
title: TCompass
description: Find MBTA stops near you using this compass native app
techStack: [React Native, Expo, Typescript]
thumbnail: '@/images/tcompass.png'
screenshot: '@/images/screenshots/tcompass-screens.png'
links: [[code, https://github.com/APJohns/TCompass]]
sortOrder: 3
---

Some T stops can be a little tricky to find when you haven’t visited them before. That’s where this app comes in. It guides you to the stop you’re looking for, bus or train. It was also a great way to continue to explore the React ecosystem and write a mobile app with React Native for iOS and Android.

The app consists of 3 tabs: Compass, Explore, and Settings. The Compass tab is the main tab that guides you to your stop. It features a compass with stop markers on it, and a list of stops you’re tracking with their distances from you. The compass’s outer ring represents 500ft away, the markers sit at the edge of the compass until you get below 500ft where they get closer to you until you reach them. The center point representing you grows as your GPS accuracy decreases. Similar to your location point in Apple Maps. The Explore page has a virtualized list of stops sorted by their distance from you, and a search to find specific stops. The Settings page allows you to include buses, trains, or both.

The data comes from the MBTA API. All stop data is fetched on load of the app, and cached for a day to local storage using AsyncStorage. This reduced API calls and keeps the app working when your data connection is poor.
