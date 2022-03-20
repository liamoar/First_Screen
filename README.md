# Setup Guidelines

1. Clone repo.
2. Run `yarn` to install dependencies. Do not use npm to install dependencies.
3. Create cypress.env.json file and add contents from cypress.env.example.json file and update necessary details.
4. Run `yarn start` in terminal.
5. To add new package run `yarn add packagename`.
6. To add dev dependancies run `yarn add packagename --dev`
7. To remove unwanted package run `yarn remove packagename`.


# Folder Guidelines

1. fixture folder is to store static file,images,excel for data purpose
2. integration : test suit is define and run over here
3. page : All the webelement of the individual page is written here 
4. pageObject : All the methods, action and logic for particular page case is defined here
5. cypress.env.json store all the enviornment variables that are required for the test.
