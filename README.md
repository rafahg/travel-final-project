# DateSpot

So you're in a relationship, or perhaps you matched in an online dating app. That's fantastic but what do you do now? Where do you go for your date? Isn't it stressful to setup and plan the date? Well, stress no more as we have you covered with curated dates based on the location of your choosing!:) :)

![heart](https://raw.githubusercontent.com/rafahg/travel-final-project/master/images/logo.jpg)

## Table of content

- [Installation](#installation)
- [Database](#database)
- [Testing](#testing)
- [Running the application](#running-the-application)
- [Tech stack](#tech-stack)
- [Extra notes](#extra-notes)
- [Team who collaborated on this project](#team-who-collaborated-on-this-project)

## Installation

### Backend

Follow these steps to install required dependencies:

1. In the root of the project, cd into date_spot-rails and type the following in your terminal:

```
$ bundle install
```

That's it for the backend!

### Frontend

Follow these steps to install required dependencies:

1. In the root of the project, cd into datespot-react and type the following in your terminal:

```
$ npm install
```

Great! That's it for the front end!

## Database
In the root of the project, cd into date_spot-rails and type the following in your terminal:

The first time you install the database, just run:

```
$ rails db:create
```
```
$ rails db:migrate
```
```
$ rails db:seed
```

For every other time, to achieve a clear installation, run:

```
$ rails db:drop
```
```
$ rails db:create
```
```
$ rails db:migrate
```
```
$ rails db:seed
```



## Testing

### Backend

Follow these steps to run tests for the backend:

1. In the root of the project, cd into date_spot and type the following in your terminal:

```
$ rspec
```

You should see the tests for the backend in the terminal.

### Frontend

Follow these steps to run tests in the front end:

1. In the root of the project, cd into datespot-react and type the following in your terminal:

```
$ npm test
```

You should be able to see the tests performed in React

## Running the application

Follow these steps to run the server:

1. In the root of the project, cd into date_spot and type the following in your terminal:

```
$ rails s
```

Yay! You just turned on the server for this project! This won't do us much good though as you won't be able to see anything. Time to fire up the front end.

Follow these steps to run tests in the front end:

1. In the root of the project, cd into datespot-react and type the following in your terminal:

```
$ npm start
```

Great! So now you have both the backend and frontend working! Now feel free to play around with the application on localhost 4000.

## Planning

The planning of this application started out with a brainstorming session where we laid out all of our ideas. The group had many interesting ideas which we discussed in depth:

![ideas](https://raw.githubusercontent.com/rafahg/travel-final-project/master/images/ideas.png)

In the end, we chose to work on an application we felt could challenge us in many areas, called DateSpot. It is an date curator which will get rid of the stress of thinking of a location or what you should do on a date.

![dateSpotBrainStorm](https://raw.githubusercontent.com/rafahg/travel-final-project/master/images/dateSpotBrainStorm.png)

For our MVP we decided to keep it as simple as possible. Our MVP would be to simple display a list of curated dating spots on the main page.

![mvp](https://raw.githubusercontent.com/rafahg/travel-final-project/master/images/mvp.png)

In the coming days we will flesh out the next stages and create a desired feature list

## Tech stack

- JavaScript
- Ruby
- Jest and Enzyme
- Cypress
- RSpec
- Ruby on Rails
- React (hooks and context)

## Team who collaborated on this project

### and their daily roles

| Name                 | Day 1           | Day 2           | Day 3           | Day 4           | Day 5           |
| :------------------- | :-------------- | :-------------- | :-------------- | :-------------- | :-------------- |
| Nima Soufiani        | Technician      | Ideas/helper    | Scribe/reporter | Leader          | Scrum master    |
| Rafa Hernandez       | Scrum master    | Technician      | Ideas/helper    | Scribe/reporter | Leader          |
| Neha Singh           | Leader          | Scrum master    | Technician      | Ideas/helper    | Scribe/reporter |
| Artemis Papanikolaou | Scribe/reporter | Leader          | Scrum master    | Technician      | Ideas/helper    |
| Gareth Harris        | Ideas/helper    | Scribe/reporter | Leader          | Scrum master    | Technician      |

## Extra notes

Extra notes we can write here
