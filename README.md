# react checklist

I use Meteor + React to manage prototypes faster. Generally, it's probably better to use build tools like grunt/gulp if the team doesn't use meteor.  Meteor just comes to me naturally. 

#Installation Instructions

1) Install meteor on your system by using this command `curl https://install.meteor.com/ | sh` 

2) Clone this project

3) run `meteor` in the project root

4) Enjoy

#Features that could be useful

There is always better designed features coming to any "living" app. Below are ideas.

0) Save the list to LocalStorage. Right now it is per-session storage using React's internal state.

1) a mailto: link that leads you to a new email CCing everybody with the list ordered by roomate, maybe with the state built in the URL. 

2) The (delete CHECKED) could be (clear CHECKED) instead, clearing the state rather than deleting the item. You can then delete them with (DELETE ALL) or (DELETE UNSAVED). This would give the user more flexibility. 

