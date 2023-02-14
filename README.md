# Tech Skills: Luma BE Demo

Requirements: see [here](./docs/requirements.md)

## Local Development
### Quickstart

```sh
$ git clone git@github.com:boolean-uk/tech-skills-luma-be-demo.git && cd tech-skills-luma-be-demo
$ npm ci
```

### Running tests
```sh
$ npm test # the whole test suite
$ npx jest spec/integration
$ npx jest spec/unit
```

Tests produce coverage results in `./coverage`

### Assumptions

- Low behavioural data => less than 25 rejected and accepted calls combined
- Age => above 50 increases priority
- Proximity to practice => less than 100 units away from practice
- Accepted Offers => a somewhat arbitrary division where >25, >50, >75 get points
- Canceled Offers => a somewhat arbitrary division where <100, <75, <50 get points
- Average Reply Time => a somewhat arbitrary division where <2500, <2000 get points

# Installing as a node module

1. create a new project directory
2. within the project directory, create a directory called `data`
3. in this directory add a file called patients.json - this should contain the list of patient data to use. Patient data should adhere to the schema defined [here](./src/cli/patientListSchema.js)
4. At the project directory root, install the node module

```sh
$ npm install tech-skills-luma-be-demo
```

Your project directory would then look like this:
```
/data
  /patients.json
/node_modules
  /.bin
  /jsonschema
  /tech-skills-luma-be-demo
  .package-lock.json
package-lock.json
package.json
```

### Getting the patient list
From your project directory:
```sh
$ npx tech-skills-luma-be-demo lon=50 lat=50
```
