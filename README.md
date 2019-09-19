This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Built using [styled-components](https://www.styled-components.com) and [Unstated](https://github.com/jamiebuilds/unstated).

## Challenge
This is a simple todo app with the ability to create todos and mark them as complete.
The problem with this app is that it is too simple and it is missing some features!
Right now we only have one list showing with all its todos there, and we can’t create new lists, and we can't filter todos.
For your test, you need to add:

1. The ability to filter the todos between "completed", "active" or "all"
2. Create new lists and show all of the lists of todos. When opening any list, it will then show the items of the list.
3. Optional: add tests where you think they're needed, especially for the store.js file. Feel free to refactor things to make testing easier.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

___

## Explanation/summary of work I did
The first thing I did was to try to understand the structure of the project, it took me some time as I haven't worked with the state management via unstated before. Once I grasped how state was all being managed in store.js and most of the work done in separate components, I started working on it. I did following things in roughly the mentioned order:  

1. Extended the state.list to a structure that it can handle multiple lists. (I went for q2 first.) I extended the list array to a dictionary, dictioanry will have a list name as its key and the list array as its value. The newly created list dictionary was named as categoryList (In code I used the word category for new list, sorry if it is confusing).
2. Then I just changed the store.js functions you had already provided me with, i.e., toggleComplete and createTodo so that the functions do the same functionality with the new list dictionary I created (categoryList) instead of older one (list). 
3. Next step was to just simply replicate the already given components and create new components for creation of new lists. The code of new components to create new lists is pretty similar to the provided components to create todos. Q2 was complete now.
4. Upon moving to Q1, I thought its solution in such a way that another state list should be maintained that represents the filteredList. So I created a new state variable for it, and upon clicking the radio boxes for filtering this state variable of filteredList was updated. Moreover, if some change like toggleTodo was done on a tab other than all it should also show changes to todoItem so I refreshed the filtered list right away after any change to todo item.
5. Finally I added some tests for store.js.

#### P.S.  
1. As I used a dictionary structure for saving new lists, so if same list is added second time it throws an error. Refreshing browser page will display the application page again. 
