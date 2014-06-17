# How to use this Sub Theme

Main theme UCSF_BASE does NOT need to be enabled to use sub themes.

Main theme is built with SASS/COMPASS. If you do not know how to setup or don't wish to do that. Can just ignore
and use your css files as normal. 

The best way to use this theme would be to copy the existing themes sass and css folders to this one and
continue building off them. 

  1. Copy this STARTER_SUBTHEME to the themes folder
  2. Rename STARTER_SUBTHEME and all references to it in your theme to your theme name
  3. at this point you need to choose to go either with SASS/COMPASS which is setup here or CSS If you choose

## Using SASS/COMPASS

  1. Point your compass to this project and rename your files as nomral. Make sure to change the **STARTER_SUBTHEME.scss_** to **yourtheme.scss**
  2. if your starting from scratch, just need to do the previous step and move on.
  3. If you want to inherit/change original/global layout, copy the  contents of the SASS folder from the main theme to your new theme SASS folder. The variables and mixins are all in there and tie into the system.


## Some CSS if your not using SASS

If you plan to use the SASS, just copy the entire SASS directory to this directory as
it ties together with all the variables. The list of code below isn't the full solution
to working with the CSS but it should provide some elements to work with that are the main
stand outs of the design.


### Element of focus
    .classname-or-element {
    	
    }












