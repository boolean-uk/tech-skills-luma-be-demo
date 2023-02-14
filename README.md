# Tech Skills: Luma BE Demo

Requirements: see [here](./docs/requirements.md)

## Local Development
### Quickstart

```sh
git clone && cd
npm ci
```

### Running tests
```sh
npm test # the whole test suite
npx jest spec/e2e
npx jest spec/integration
npx jest spec/unit
```

Tests produce coverage results in `./coverage`

### Assumptions

- Low behavioural data => less than 25 rejected and accepted calls combined
- Age => above 50 increases priority
- Proximity to practice => less than 100 units away from practice
- Accepted Offers => a somewhat arbitrary division where >25, >50, >75 get points
- Canceled Offers => a somewhat arbitrary division where <100, <75, <50 get points
- Average Reply Time => a somewhat arbitrary division where <2500, <2000 get points

## Installing as a node module

1. create a new project directory
2. within the project directory, create a directory called `data`
3. in this directory add a file called patients.json - this should contain the list of patient data to use.
4. At the project directory root, install the node module

```sh
npm install tech-skills-luma-be-demo
```

### Getting the patient list
```sh
npx tech-skills-luma-be-demo lon=50 lat=50
```
