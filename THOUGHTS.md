## Task 1

I went through the task and then went straight to through the API to see whether there is a timezone value passed from the backend to format in the UI. But it wasn't present. So I looked at other ways on how we can achieve this, I went through libraries such as moment and luxon but I also thought that do we need to incur an overhead of adding a package size for this issue. So I went ahead with using a constants file with all the major timezones and parsed the value.

[Bug fix PR](https://github.com/RakeshRenzous/space-rockets/pull/2)

## Task 2

This feature involved quite some planning and I started by working on how I am going to store the data and pass it throughout the app. I opted to use context API with useReducers hook over Redux. The main reason was at the moment this doesn't feel like a complicated state for now and we wouldn't be using that extensive of the tooling suite offered by Redux. And incase in the future our app grew we can still migrate to Redux. I kept the favorites in the header so that they can be accessed anywhere from the app. I also looked at other apps in e-commerce for wishlists and favorites tab been built and tried to recreate the tab style for the drawer.

[Add to favourites](https://github.com/RakeshRenzous/space-rockets/pull/3)

For future improvements, I would have added

- Search
- Clear All

## Task 3

This is the task I really enjoyed a lot since it was an open-ended question, I set myself a timebox of 10 hrs on what I could achieve in this time frame, I wrote a list of things from test suites to new features. I wanted to focus on things that could showcase my thinking and insight on what type of Front-end engineer I am(also wanted to learn a few things 😄)

That's why I worked on the following

- [Prettier and pre-commit hook](https://github.com/RakeshRenzous/space-rockets/pull/3) - Tooling
- [Virtualisation](https://github.com/RakeshRenzous/space-rockets/pull/5) - Performance
- [Sort](https://github.com/RakeshRenzous/space-rockets/pull/6) - Feature
- [UI refactor](https://github.com/RakeshRenzous/space-rockets/pull/8) - UI (Wasn't able to complete this fully)

Things I would to improve further

- Test suites
- Typescript
- Theming
- Skeleton UI
- Home page revamp
- i18n
