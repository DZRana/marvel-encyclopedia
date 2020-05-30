# Marvel Encyclopedia

An application that uses the Marvel API to fetch and display Marvel characters which link to their respective bios on the Marvel website.

## Live Demo

https://dzrana.github.io/marvel-encyclopedia/

#### Sample:

![Marvel Encyclopedia Demo](demo/m-e_demo.gif)

## Purpose

This was a starter project with the goal being to utilize and demonstrate basic knowledge of React and REST APIs. Most functionality was completed within a couple of days.

This was meant as a jumping-point off point for me to familiarize myself with React. I started off with the `create-react-app` boilerplate, then built out simple components from there which utilized the data received from the Marvel API.

Just starting out, however, there were two major challenges that I encountered: API handling and Conditional Rendering. Before building out the major components, I tried to figure out how best to handle API calls with React. This introduced me to lifecycle methods and `componentDidMount()` to ensure my calls came after the component was rendered. I also found that using ES8's async/await syntax rather than promise chains when calling the API was more readable when coupled with setting state. As for querying the API itself, the request needed an MD5 hash of my public and private keys. I used `npm` to install an MD5 module and used that for that portion of the request. Secondly, I knew I would eventually run into issues with searching for new characters and the timing in which their cards were displayed. I had to provide visual feedback for three things: no characters were found, characters were loading, and the character cards, themselves. I handled this by using `Inline If with Logical && Operator` in my render function along with state to render what I wanted, when I wanted.

All in all, using just the `create-react-app` boilerplate and a couple of node modules (`md5` for the API and `tachyons` for styling components), I was able to build out this app. The `md5` module was pretty straightforward and `tachyons` was as simple as importing it and using the class names outlined in their documentation.
