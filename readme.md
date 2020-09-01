# How to run

`npm run start:dev`
this will serve the dist folder from memory into localhost:8080
going to localhost:8080/firstslide brings you to the first keymessage
/secondslide etc etc.

## Goals

The goal of this experiment is to see how fast you can get a veeva like envrionment up
without Angular.

Vue was chosen because of its popularity and its compatibilty with web components.

Pros:

- Vue's popularity means all the custom jury rigging i was doing had examples or some clues to answers for me.
- Each keymessage is building to its own keyfolder with its own runtime.js.
- more control since i control webpack
  - webpack is more popular
- less automation code since the build automatically templates to their own folder. About 100 lnes of grunt code not necessary becasue of webpack.

Cons:

- doing everything yourself means everything is custom.

## Checklist of feature needed to overtake angular

- [ ] css encapsulation
- [ ] ng-deep
- [ ] rxjs
- [ ] dependency injection for services
- [ ] typescript
- [ ] localized injection of assets

## TLDR floating thoughts:

As a VEEVA CRM User

- must be able to swipe right to get to the next substate.
- must be able to swipe right on the last substate

## Gotchas: Stuff they dont put in the vue documetation.

- vue-style-loader hasn't been touched in years.
  - dont use it, use style-loader to load your styles
- styles should be scoped
  - internally , vue uses postcss and putting style scoped src ... gives you angular like encapsulation.
    - ng-deep equivalent is >>>> https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
-
