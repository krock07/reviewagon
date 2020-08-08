# reviewwagon

## Reviewagon is a CRUD app built with Ruby on Rails and React.js using Webpacker.

Reviewagon is a baby stroller reviews app. This application allows the user to read previous reviews from other users, create their own review, rate the stroller on a five-start system, edit their review and delete the review if they no longer want it show on the app. Now that I am a father of two, a stroller is more important than ever because we need a stroller that works for both kids and is light enough that my wife can handle it when I am not around. The first time we purchased a stroller we search tons of websites reading the reviews of  what seem like a million baby strollers. It would have been super helpful if there was one central location where I can read reviews on one site and make my decision from there. That is where reviewagon comes into play, your safe place in an unsafe world to share your stroller experiences

## Setup Steps

In the terminal command line rails new app-name --webpack-react -d postgresql. This will setup you rails appliation. Run rails db:create to create your database.  Setup the models for the app by running rails g scaffold strollers title slug  img_url. Then run rails g scaffold reviews title description img_url description score:integer stroller:belongs_to

Run rails db:migrate to generate your schema file. Once the models are created its time to seed some data in the seeds.rb file. Once that is complete run rails db:seed. Check the rails console (rails c) to see if the data was seeded. In the console run Table name.all and the data should show up.

## Important links
https://github.com/rails/webpacker/tree/master/docs
https://codepen.io/hamzaerbay/pen/xGWgMM




## Planning Story
The first step I used to build this app was to make a timeline with all the steps I need to complete MVP. For each step I gave an estimate of how much time it would take task to complete. After that I added a stretch goal section of things I wanted to accomplish if I had enough time.   

I figured out how many tables I needed and how many columns each table needed. I then established the relationship between the tables. Next, I set up my controllers and routes for the application. Once everything was done in the backend I created my react app. Once that was complete I set up my links using react router. Then I started to build my components starting with the navigation.



## User Stories

- As a user I want to sign in/up
- As a user I want to Create a new < review >
- As a user I want to Read multiple < reviews >
- As a user I want to Read a single < review >
- As a user I want to Update a < review > I own
- As a user I want to Delete a < review > I own

## Technologies Used
* Ruby on Rails
* React (create-react-app)
* React Router
* React Hooks
* Webpacker
* Adobe Illustrator


## Catalog of Routes

### Strollers
GET    /api/v1/strollers
POST   /api/v1/strollers
GET    /api/v1/strollers/:slug (individual stroller)
### Reviews
POST   /api/v1/reviews
PUT    /api/v1/reviews/:id
DELETE api/v1/reviews#destroy



### Unsolved Problems
Unable to get the my data to deploy to Heroku
My handleUpdate only works in Postman and not in the frontend

### Future Goals
- Allow users to add a stroller that not listed on the website
- Deploy website to heroku or netlify
- Set user authentication up


## Images

#### App Screenshot:

--- ![App Screenshot](https://github.com/krock07/reviewagon/blob/master/app/javascript/src/images/AppScreenShot.png?raw=true)

#### Wireframe:
![wireframe](https://github.com/krock07/reviewagon/blob/master/app/javascript/src/images/wirefram.png?raw=true)
#### ERD:)

