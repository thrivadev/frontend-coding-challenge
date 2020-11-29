# Notes

This has been a really interesting intro to vue, thanks whoever designed this challenege.

It's better to inform the user as soon as possible if they've broken the 1 diet and 0-4 goals rule. So while in the goals page make sure they can't have more than 4 goals and that they can't progress if they haven't selected 1 diet. Doesn't say goals are required so I'm letting them progress with 0.

### Testing:
There isn't much point testing the result of sendToApi if I am mocking the response.
I added test to the getters as they're not tested in the `sendToApi` test, would be nice to use the getters without mocking them in the `sendToApi` test, not sure how to implement this though. 


### Improvements:
- Extend Checkbutton to be disabled when 4 selected values have been chosen.
- Keyboard accessibility for choose goals and diets needs improving, it should follow checkbox logic, with space toggling the selected state.
- Voice accessibility, aria-labels are needed to give context to voice over users.
- Clicking back should show saved state. E.g. Going from Diet back to Goals, all selected Goals should still be selected.
  - This could be implemented with the mounted hook/method, checking the store as it's mounted.
- Storing the submitted values in a session cookie or localhost to avoid losing data if the user refreshes. 
- Name restrictions, don't allow numbers?
- Redirect to /name on /success if any data is missing
  - Even better redirect to the earliest missing peice of data
- Add E2E testing

