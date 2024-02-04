## Inspiration
With a combined 6 years of military experience, injury caused by poorly maintained personal equipment is commonplace and can be devastating. Over the years of training, there's been an alarming increase in the number of fall outs (physical excuse from physical activity) due to injuries caused by ankle and knee impact, like contusions and sprains. 
As such, we've paired up with the Terra API to produce an app interface that tracks the health of your running shoes, as a function of multiple running variables.

## What it does
The app will track health and fitness data via wearables that pair with Terra and compute shoe health based on mileage, average cadence, and user weight (backed by academic research). It will display a use tracker, upon which reaching 100% the user should know its time to change their shoes. It would also display mileage over the past week, for ease of physical activity tracking to ensure soldiers will not overexert themselves and cause further injury.
The app comes with a web app console interface - meant for admin users (such as sergeants or officers of the military) that have an overview of the shoe health and running styles of the soldiers under them. This can ensure the required and specific stores (running shoes, combat boots) can be ordered ahead of time to ensure safety.

## How we built it
We used TerraAPI to draw data into Firebase, on which we hosted our app and Cloud FireStore, on which we hosted our database. Mainly written in JavaScript, Kotlin, HTML and CSS. 

## Challenges we ran into
Making a responsive and dynamic UI and computing a function that can meet the theory of mechanics of running movement, while meeting the required observed data trends that validate it. Furthermore, being our first hackathon, we faced numerous physical challenges such as sleep deprivation and poor nutrition (sorry DocSoc) that were slightly taxing. Nevertheless, TerraAPI made things really convenient for us to link to Firebase and to draw the required data.

## Accomplishments that we're proud of
We're proud of coming up with a working prototype of our idea. We are also proud of how well we worked with each other - managing to effectively communicate ideas and approaches. Personally, having little to no full stack experience, this was a challenge that I had to overcome. With time and perseverance, I slowly started to gain familiarity with Firebase and TerraAPI documentation and I was quite proud of that.

## What we learned
We learnt that with perseverance and a good idea that we feel strongly for, we can do things that we wouldn't have thought we could do :)

## What's next for ShoeSage
Hopefully with better development, we will pitch the idea to the Singapore military. Given that the military takes an innovative approach to adopting new technologies to tackle pertinent problems, we believe our app would be well-received by them.
