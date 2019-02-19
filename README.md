## Notes

- I used create-react-app to bootstrap this project but all code under the src directory is my own. I included semantic-ui for styling.
- To start the app run `yarn start` from the root directory

## Assumptions Made 
- I assumed all keys are the only keys that will ever be present, i.e. I do not need to dynamically generate columns
- I assumed all data coming in would have an id field in my merge function. If I had to deal with irregular data without an id I would update that function to just push objects without an id onto the row object being built since ther isn't really anything to try and merge them on

## Tests I Would Have Added
- I broke the merge function out into a utility so it would be easy to unit test
- I would add enzyme to test the component rendering with different state