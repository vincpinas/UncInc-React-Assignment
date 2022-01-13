# Setting up
setting up the project I wanted it to be simple and fast without having to think too much about code spacing etc. So I decided to remove the airbnb ruleset from the eslintConfig extends, that way I wouldn't have to think too much about line breaks and file extensions etc.

# Starting the component
I decided to keep it simple and take inspiration from a past laravel project. This was the project I most recently worked on where I learned about what might come from a database when creating a page.

Which include but are not limited to, the number of the row, a slug, and lastly some data you want to show.

In place of a row number from a database I used the index of the item in the array for convenience the rest of the data is fairly similair to how it would look coming from a database.

I then had to firstly setup a useState to keep track of the current page, had I not done this and use a let variable instead React would not have known to update the component whenever the state of the variable changed.

I then made a map function to go over the array of items in which I made 2 conditional renders, one whenever the current page link includes the slug and one whenever it does not.

# Finishing touches
After first finishing a simple version of the component I thought about what to do when showing the page with pagination under it. Since both components will make use of the current page and page data. So I decided to move the variables to the top level of the component and create a little preview component.