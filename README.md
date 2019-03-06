# Friend Finder

## *App's* *Purpose*

    Find some friends.
    It'll be cool.
    
------

## In Action

![homepage](#)
#### Home Page
It shows a jumbotron with some basic info and a link to the survey. There are also links to the list of all friends as well as a link to this repo.



![survey](#)
#### Survey
The survey itself, once completed it'll display a modal that will show you your "best" match in the form of their name and their image.

------

## Difficulties

  * Pulling data from forms when using multiple choice checkboxes
    - [x] solved: using $("form").serializeArray() 
    
  * Getting modal to load
    - [x] solved: The load order of scripts/stylesheets ended up being the issue, correct order: jQuery -> popper.js -> bootstrap js -> bootstrap css
    
  * Friend Matching 
    - [ ] unsolved: I dont think I'd call this solved, it has a basic way of choosing a friend but it isn't really _**correct**_, very much a patch job solution
    
------
