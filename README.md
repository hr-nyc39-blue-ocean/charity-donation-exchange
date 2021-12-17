

# charity-donation-exchange

## Table of Contents

This app is deployed on Heroku --> https://charity-donation-exchange.herokuapp.com/

## Introduction

Nowadays there is a healthy emphasis on the “reuse” part of “reduce, reuse, recycle”, particularly when it comes to the charitable repurposing of items. Currently, existing online marketplaces do not really allow for an easy exchange of donated goods, and do not offer a way to track donated items specifically. While online marketplaces do allow the exchange of goods for monetary compensation, there is  typically  no  way  to  easily  distinguish if an item is for donation  specifically.  Charitable organizations looking for particular donated items also do not have a platform to do this easily, and instead of being able to actively search for donations that suit their needs, they must rely on passively accepting anything that is donated to them.  

### What does the app do?

The solution that our team has come up with to solve the crisis of shortages in access to critical  daily  necessities, is to  create  a  website  that provides the connection between an individual and the resources available in their communities. We hope that this  project  will  connect more people with each other and remind us of the power that we have when we come together. We created this space for all to feel welcome and safe to give and receive, and to pay it forward.  

### How does the app work?

Our project brings Donors and Donees together in a single space to provide easy access to vital life essentials. As an option, a Donor may specify whether they would like their donations to be claimed by a single individual or by a charity foundation. Donors can quickly look up and track all of their donation listings on our simple user-friendly Dashboard. This project also  provides options  for  the  Donee  to  browse through all of our currently active listings by the distance closest to the Donee or by the newest listings  posted for  an  easier  experience  in searching for available resources. To ensure the privacy of both parties, communication is kept solely between the Donor and the Donee by exchanging external contact information. In the event that you would like to keep your anonymity as a Donee, we have added a feature where a Donee may claim items as Anonymous. 

## Tech stack
## Front-End Development

####  <img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"> <img width="15%" src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg"> <img width="15%" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"> <img width="15%" src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg">


## Back-End Development

####  <img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"> <img width="15%" src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-ar21.svg"> <img width="15%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"> <img width="15%" src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png"> <img width="15%" src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"> <img width="15%" src="https://stackjava.com/wp-content/uploads/2018/03/bcrypt-logo.jpg"> <img width="15%" src="https://www.devonblog.com/wp-content/uploads/2018/08/jwt_05.jpg"> <img width="15%" src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg">



## Compiler

####  <img width="15%" src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg"> <img width="15%" src="https://www.vectorlogo.zone/logos/babeljs/babeljs-ar21.svg">

## Code Formatter

####  <img width="15%" src="https://www.vectorlogo.zone/logos/eslint/eslint-ar21.svg"> <img width="15%" src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png">

## Testing

#### <img width="15%" src="https://www.vectorlogo.zone/logos/newrelic/newrelic-ar21.svg"> <img width="15%" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1420816527/efcb3lfvkif27xsoreye.png">  <img width="15%" src="https://onward.justia.com/wp-content/uploads/2021/08/Website-Metrics-With-Google-Lighthouse-1024x538.png">

## Project Management

####  <img width="15%" src="https://www.vectorlogo.zone/logos/trello/trello-ar21.svg">

## Deployment
####  <img width="15%" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg"> <img width="15%" src="https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg"> <img width="15%" src="https://www.vectorlogo.zone/logos/docker/docker-ar21.svg">



## Technical Challenges 

## Images to be sorted out later
![image](https://user-images.githubusercontent.com/89167923/146597966-75c4b9a8-a460-4b08-ab93-48ef7db8febf.png)
![image](https://user-images.githubusercontent.com/89167923/146598142-c75e2e5e-2d87-4aa2-90ce-fbcab0948dfa.png)


Blue Ocean Readme

Technical challenges and research that you anticipated:

* Managing git workflow among the largest team yet (5 people)
    * Plan: Make sure everyone is clear on the proper operating procedures for Pull Requests/Making changes/etc., communicate often
    * Learned: Need to communicate more while making changes, give other people a heads up before editing their code, make sure to merge the pull requests as soon as the code review is completed, could have set up a testing suite to test for functionality much faster before and after each PR
* Implementing a robust authentication feature
    * Plan: Assign the task to a person who will research the relevant methods needed and implement them
    * Learned: There are various technologies used for authentication, need to be selective based on the actual use-case, need to be mindful of the vulnerabilities that a particular technology may unexpectedly introduce to the app
* Connecting all the components (that were individually worked on) together to achieve functionality
    * Plan: need to constantly communicate with one another whenever working on connecting components that were built by different people, ensure functionality before making merges or pull requests
    * Learned: even a small change in one component can introduce bugs and other malfunctions in other components that interact with said component, having one person to put their foot down and declare the format or shape of the expected data in one component can help with efficiency since other people can simply work on matching that format in the data they are sending out, its better to follow the Agile approach of building iteratively instead of incrementally (make sure the components are integrated early and often as opposed to each person just working on building a complex component that later will take forever to integrate with other components


Unexpected challenges

* Splitting up the work (actual coding) among team members
    * Why was it a challenge: there were multiple ways of splitting up the work such as by component or by service (front-end, back-end, db, api) and we were unsure which method was most commonly used in real life situations and how efficient each method would be
    * What did we learn: as recommended to us, each person taking charge of a service and everyone working on their own service in parallel with others and integrating them at various points in time proved to be an efficient use of time as there was little downtime in terms of having to wait on the work of others (which would’ve been the case if each person was in charge of a full stack slice of the entire app)
* Debugging (more than expected)
    * Why was it a challenge: since each person only worked on their own service mostly, if a debugging session involved checking the entire app and each component, sometimes it would be hard to follow the flow of operations/data because you were unfamiliar with other people’s code
        * If code was changed during a debugging session when it wasn’t your own code and the original author was not made aware of those changes, they could’ve gone and implemented other functionalities based on that now-changed code which would’ve led to further bugs and broken stuff.
    * What did we learn: don’t change other people’s code, if you do let them know or talk to them beforehand to get their permission. Whenever a debugging session encompasses more than a single service, invite that other person(s) so that they can quickly parse through their code for you and help make the session end faster. Make use of zoom collaboration features more so we’re not just verbally communicating at a single person screen sharing which slowed down the process a lot
* Sorting by Distance
    * Why was it a challenge: we agreed to implement this feature at the initial meeting with client. However, it turned out to be a bit more complex than we had originally envisioned, because the idea was to take in a zip code from a user and calculate the distance from that zip code to the zip code of each listing in the database, and there wasn’t a straightforward way to calculate distance between two zip codes.
    * We brainstormed a number of solutions including
        * using an external API service that provided the distance between two queried zip codes (scrapped because query limit was 10 an hour)
        * Using the googlemap API (scrapped because it was a paid service and we didn’t have a budget)
        * Sorting instead by borough (since this app’s scope would be NYC only, per client) or city (scrapped in lieu of better solution)
        * Having a static object that has all NYC zip codes and their distance from one another (scrapped because very hard to make)
        * Extracting global coordinates from each zip code and then using a geolocation formula to calculate the distance between those two sets of coordinates (feasible, we had found a csv file with all zipcode/coordinates data pairs, but scrapped due to finding a npm module that accomplishes exactly the same goal for us)
        * Actual solution: basically the previous bullet but someone had bundled all the functionality into a single npm module which we installed and implemented



What additional features do you plan to add, how do you plan to implement those features?

* Extra features
    * Being able to upload multiple photo urls for a listing
    * Live chat or other more robust communication feature for donor <-> donee
    * Edit listing
    * Search function (keyword, category, etc.)
* Refactoring: 
    * React Context
    * React Router
* Optimization:
    * Page load/Lighthouse related metrics
    * Load balancing/nginx/redis caching
    * Stress testing to ensure scalability


Key lessons from working with an external stakeholder
* The client was not technologically well-versed, so we had to translate what she was requesting into technical action items that could then be easily broken down further in terms of ticketing and planning so that it could be implemented through code
* Given the limited time, at inception we needed to set the exact scope of the project in terms of features, functionality, and deliverables
* Before showing the client the final proposal, we needed to really deliberate and plan out if each of the features the client requested would be feasible in terms of actual implementation, and if so, to what degree
* The project proposal gave us the opportunity to come back to the client with specific deliverables and design ideas that we thought we could achieve within the project timeline, and have the client go through it and set her expectations on the final product

Key lessons from user stories/ticketing
* User stories are non-technical in that they come almost directly from the client’s requested features
* Translating these stories into tickets that are isolated from one another in terms of service so that a single programmer can work on it on their own proved to be trickier than originally expected
* Learned that it’s always better to break down a user story into as granular of a ticket as you can make it, since it will simplify the task at hand
* Always make sure tickets are assigned to individuals and that everyone is aware of who is working on which ticket so the process is efficient and people are always working in parallel

Key lessons from standups/code reviews
* Good to set specific daily goals so that you always have a clear idea of what you should be accomplishing by the end of that day
* In addition, setting tangible group goals in order of priority (MVP first, then other features, etc) would’ve helped with productivity even more
* Code reviews could’ve been a bit more thorough and functionality testing should’ve been performed a bit more often instead of instant merging

* Link to Trello board: https://trello.com/b/kJMMFlce/blue-ocean
*
