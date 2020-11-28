# Notes

> The user can select up to 4 goals but only 1 diet.
> The users should not be able to progress to the next stage if the above
requirements are not met.

I'm assuming it's better to inform the user as soon as possible if they've broken these rules. So while in the goals page make sure they can't have more than 4 goals. Doesn't say goals are needed so letting them progress with 0.

Testing
There isn't much point testing the result of sendToApi if I am mocking the response
Adding test to getters as they're not tested in the sendToApi test, would be nice to us real functions but not sure how

Old TODOs
Disable Next if no Diet is selected


Improvements that should be made:
- Extend Checkbutton to be disabled when 4 selected values have been chosen
- Keyboard accessibility for choose goals and diets, should follow checkbox logic, space toggles selected
- Clicking back should show saved state. E.g. Going from Diet back to Goals, all selected Goals should still be selected.
- Name restrictions? Don't allow numbers?

