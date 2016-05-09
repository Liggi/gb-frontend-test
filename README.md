# Geckoboard Front-End Coding Challenge

Hi guys!

Here's my solution to the coding challenge. I decided to tackle this in React; it's not necessarily what I know best, but I figured it was the easiest way for you to get a feel for my level of ability in this area.

I've hosted it online [here](http://gbmeter.s3-website-us-east-1.amazonaws.com/), for easy viewing.

## Getting it running

If you want to run it locally, simply clone the repository and then run:

    npm install

Once this is done, run:

    npm run app

## Where would I go next?

* __Data validation__. Currently, the API often spits out values that don't make sense for the meter (ie. a minimum higher than the maximum, or a current value that doesn't fall within the min/max). It would be nice to be able to handle these instances in a way that's more obvious to the user.
* __Currency / formatting options__. At the moment, the current/format options are ignored by my meter. My intention would be to expand to allow for different types of unit (ie. miles, kg, no. of users), and also for different currency symbols (via some sort of simple lookup for currency codes).
* __Responsive__. The meter is currently a fixed size. I'd add in some responsive functionality for a nicer mobile experience.
* __Restructuring__. The refresh button is currently tied directly into the meter. I'd probably revisit this, and separate them.
* __Visual improvements__. It'd be nice to have a "counter" effect when loading new data, so that the numbers flip to the correct number, rather than being immediately set with no animation.

