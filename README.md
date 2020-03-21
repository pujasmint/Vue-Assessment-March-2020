# Twisted Rope JavaScript / Vue Assessment March 2020

Hello! Thank you for your interest in a career with Twisted Rope. We are excited to have you apply!

Please find below an assessment in two parts -- the first part is an online JavaScript fundamentals assessment that should take you 15 minutes or less.  The second is a small exercise within an existing codebase.

Both parts of the assessment can be taken from home, but we ask that you do not spend any more than 2 (or 3, at the absolute most) hours on this.  Even if you don't finish, we'll still be able to get a feel for how you work and think and will evaluate the code you've already provided, so don't worry.

# Part 1 - JavaScript Fundamentals Assessment (15 mins)

Please sign up for -- and complete -- the [PluralSight Javascript Core Language quiz](https://www.pluralsight.com/paths/javascript-core-language).  You will need to fill out a form before you begin, but there is no cost for taking this quiz.  At the end of the assessment, **take a screenshot** of your final results and send it back to your recruitment contact.

# Part 2 - Vue Entry-Level Assessment

Take a look at the [Vue assessment project](https://gitlab.twisted-rope.com/twisted-rope-public/developer-assessment-js-vue-2020) located in our Twisted Rope Gitlab.  The project's master branch is locked, so you will need to fork it elsewhere, or else download it and work locally.

**Scenario:** A lively and spirited message board, with threads on a variety of topics. You, a new user, want very much to add your thoughts, dreams, hot takes, and breakfast selfies to this thriving community. But there's a problem: the developers didn't add any way for new users to create posts! 🤯

**Goal:** update the project so that you as a user can add new posts that appear at the bottom of threads.

**Rules / info:**

1. You do not need to import any other libs or npm packages. All tools necessary to complete the task already live in the code base.

1. You must build a way for users to input text for their posts, and implement a mechanism for updating the view with the post once it is submitted. Posts are plain-text only.

1. Assume that all new posts will come from a single user, doesn't matter who. (i.e., don't worry about auth and login and user accounts)

1. All the data for the app is contained in ```data.json```.

1. The app is client-side only! You won't be able to write data to the JSON file. *This is totally fine*. New posts only need to persist in the view until page refresh.

1. Please be sure to *leave comments* in the code so we can better understand the thought process behind your work.

1. Please don't spend more than 3 hours on this assessment. We don't want to ruin your life in the process of seeing what you can do 😎

**Submission:**

Once you're finished, zip the entire project (please remove the ```node_modules``` folder before you do this) and host it anywhere you'd like that we'll be able to grab it. Google Docs, Github, Dropbox etc. Let us know where to find it and you're done!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
