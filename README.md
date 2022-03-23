# ONLINE CONVERTER/ INGREDIENT LIST GENERATOR

#### Video Demo:  https://youtu.be/ycpEcvkWoBc

#### Description:
My CS50 Final Project is an Online Converter/ Ingredient list Generator. Dynamic conversions of liquid or dry ingredients can be done from one unit to another.

There are two webpages in the website. In the first webpage called "Home" whose HTML code is in my **index.html** file consists of 3 sections by design. Fluid ingredients, dry/bulk ingredients and commonly used dry ingredients. I decided to keep these sections seperate because the units for conversion are different for mass and volume. The third section which is the "Commonly used dry ingredients", has a drop down box where the user can select the ingredient and convert to their desired unit. I have kept these seperate as well because unlike liquid ingredients, these dry ingredients have different densities which account to significant differences in their converted amounts. There are drop down menus for the units as well.

**script.js** consists of javascript code which I have linked to index.html. It consists of 4 functions- roundNum, fluidConversion, dryConversion and ingredientConversion. Various user inputs are stored into variables and used in these functions. RoundNum function is nested within the three conversion functions and later these functions are called through event listeners.

The second HTML file **generator.html** renders a webpage which has the same 3 sections for conversions and an added text field - Ingredient name for the fluid and dry ingredients section. They also have an "Add" button to add the ingredients and their converted amount to the list generated below these sections. As the list items are added to the list, the user can also remove them by the 'Remove' button. If the user adds anything to the list with the input fields blank, they'll be alerted with a message to provide input in the necessary fields. Finally there is a "Print List" button which opens a new window with the list of ingredients and a print dialogue box.

**generatorScript.js** is linked to this webpage. It consists of same four functions as in script.js plus four additional functions- three for each "Add" buttons and one for "Print List" button which are triggered through event listeners (event here being 'click'). The functions for "Add" buttons create new elements - list items. Further, three user inputs - the ingredient name, the converted amount and it's unit are added to this list item one by one. The "Remove" button removes the whole item list.

The **printList()** function takes in the content of the div with id "print" which consists of the list items added through the functions triggered by the click of "Add" buttons. Before doing so, the visibility of the 'Remove' buttons is hidden. Then a new window is opened with the list and the print function is called. After calling the print function, the "Remove" buttons are made visible again. The purpose of this was to only have the list printed from the div content and not the "Remove" buttons.

For styling, I have used Bootstrap.
