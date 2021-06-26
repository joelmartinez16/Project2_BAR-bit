const { Bar } = require('../Bar-Models');

const BarData = [  
    
    { 
        bars_name:"C Level", 
        rating: '4.5 stars',
        pricing: '$$',
        hours: 'Sun- Thurs: 11:30 AM- 9:00 PM, Fri & Sat: 11:30 AM- 9:30 PM;', 
        reservation: 'Takes Reservations',
        review: ' Great place for a celebration for any occasion. Beautiful view, great service, and good food.',
        day_of_week: 'Moody Monday',
     }, 

     { 
         bars_name:" Belgian Beer & Waffle",
         rating:" 4.5 stars",
         pricing:"$$", 
         hours:" Mon- Sun: 9:00 AM- 3:00 PM;", 
         reservation:"No reservations, first come first served",
         review:"European Brasserie with an all-day, counter-service menu ranges from savory  waffle sandwiches, burger, chicken and waffles, and a waffle riff on avocado toast to waffles topped with ice cream, fruits, and sweet sauces.", 
         day_of_week:"Moody Monday",

     }, 
        
     {
        bars_name:" Bud’s Louisiana Cafe",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:" Mon-Fri: 11:00 AM- 2:00 PM, Sat & Sun: Closed", 
        reservation:"Takes Reservations",
        review:"Authentic Creole and Cajun food with dishes like Seafood Gumbo, Red Beans & Rice, Crawfish Ettouffee, Fried Catfish and lots of great Po Boy sandwiches", 
        day_of_week:"Moody Monday",
     }, 

     {
        bars_name:" Kogi BBQ",
        rating:"4 stars",
        pricing:"$", 
        hours:"Mon- Thurs: 5:00 PM- 11:30 PM, Fri- Sun: 4:00 PM- 12:00 AM", 
        reservation:"Takes Reservations",
        review:" Kogi BBQ is the best place to spend your leisure time tasting delicious food  and enjoying the nice atmosphere.", 
        day_of_week:"Moody Monday",
     }, 

     {
        bars_name:" Muzita Abyssinian Bistro",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:"Mon- Thurs: 5:00 PM- 9:00 PM, Fri- Sun: 3:00 PM- 9:00 PM", 
        reservation:" Takes Reservations",
        review:" Welcome to Muzita Abyssinian bistro. Our goal is to provide our neighbors with a unique cultural dining experience", 
        day_of_week:"Moody Monday",
     }, 

     {
        bars_name:"Realm of the 52 Remedies",
        rating:"4 stars",
        pricing:"$$", 
        hours:"Monday: Closed, Tues-Sun: 5pm- 11pm", 
        reservation:" Not required, but Recommended",
        review:"This place is magical. From the drinks to the food, you wouldn’t be more satisfied. The atmosphere and ambiance is chill and lowkey.", 
        day_of_week:"Treat yo’self Tuesday (fancier stuff)"
     }, 

     {
        bars_name:" Eddie V’s Prime Seafood and Steaks",
        rating:"4.5 stars",
        pricing:"$$$", 
        hours:" Mon-Thurs: 4:00 PM- 10:00 PM, Fri & Sat: 4:00PM-11:00PM, Sun: 4:00PM-9:00PM", 
        reservation:" Not required.",
        review:"The restaurant is set in a relaxed, elegant atmosphere accented with a palette of sultry earth tones occasionally interrupted by bold colored artwork and mixed wood finishes.",
        day_of_week:"Treat yo’self Tuesday (fancier stuff)"
     }, 

     {
        bars_name:"Mystic Lounge",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:"Mon- Sun: 12:00 PM - 2:00 AM", 
        reservation:" Reservation not required",
        review:"Upscale Lounge and Restaurant featuring a Full Service Bar, Over 50 Hookah flavors, Signature Cocktails and VIP Bottle Service, 9 Big screen TVs for  Music Videos and Sporting events, No cover (may vary for special events ),Private events venue, 21 & up.", 
        day_of_week:"Treat yo’self Tuesday (fancier stuff)",
     },

     {
        bars_name:"The Grass Skirt",
        rating:"4 stars",
        pricing:"$", 
        hours:"Mon: Closed, Tues & Wed & Sun:5:00PM-11:00PM,Thurs-Sat:5:00PM-12:00 AM", 
        reservation:"Offers reservations",
        review:"Walk-ins are welcome if there is available seating. The front entrance is through the poke shop. Dine in and enjoy the intricately decorated tiki/Polynesian atmosphere.", 
        day_of_week:"Treat yo’self Tuesday (fancier stuff)",
     }, 

     {
        bars_name:" Oceana Coastal Kitchen",
        rating:"4 stars",
        pricing:"$$$", 
        hours:" Sun- Thurs: 7:00 AM- 2:00 PM/ 5:30 PM- 10:00 PM, Fri& Sat: 7:00 AM-2:00 PM/ 5:30 PM- 11:00 PM", 
        reservation:"Takes Reservations",
        review:"Waterfront San Diego Dining - Oceana Coastal Kitchen is the vibrant,signature restaurant inside the Catamaran Resort Hotel and Spa on San Diego's Mission Bay.",
        day_of_week:"Treat yo’self Tuesday (fancier stuff)",
     }, 

     {
        bars_name:" Los Panchos Tacos & Cantina",
        rating:"4 stars",
        pricing:"$$", 
        hours:" Mon-Sun: 8:00 AM- 12:00 AM", 
        reservation:"Reservation not required",
        review:"A local family owned taco shop serving San Diego since 1974.Offers a Full Bar as well to our awsome authentic mexican food.", 
        day_of_week:"Humpday Wednesday",
     }, 

     {
        bars_name:" Mina Lounge",
        rating:"4 stars",
        pricing:"$$", 
        hours:"Mon- Thurs: 12:00 PM- 2:00 AM, Fri- Sun: 12:00 PM- 2:00 AM", 
        reservation:"No, first come first served",
        review:"Located in the heart of the Gaslamp Quarter, Mina Lounge strives to give our customers the best hookah experience. ", 
        day_of_week:"Humpday Wednesday",
     }, 

     {
        bars_name:"Cross Street Chicken and Beer",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:"Mon- Sun: 11:30 AM- 9:45 PM", 
        reservation:" Reservation not required",
        review:"Korean Fried Chicken meets Southern. Best of both worlds. 20 Beers on tap with over 5 imports. We have Soju Cocktails and specialty Korean bites!", 
        day_of_week:"Humpday Wednesday",
     },  

     {
        bars_name:" Trust",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:" Mon & Tues: Closed, Wed- Fri: 5:00 PM- 9:00 PM, Sat & Sun: 9:00 AM-2:00 PM/ 5:00 PM- 9:00 PM", 
        reservation:" Recommended not required",
        review:"“Every relationship needs TRUST. Trusts dishes are so good they leave you full and happy. If you're looking to find that foodie spot  no one knows about yet you should go here!",
        day_of_week:"Humpday Wednesday",
     },  

     {
        bars_name:"Dirty Birds",
        rating:"4 stars",
        pricing:"$$", 
        hours:"Sun-Wed: 11:00 AM- 12:00 AM, Thurs- Sat: 11::00 AM- 2:00 AM", 
        reservation:" Recommended not required",
        review:"This place is busy and small but the burgers are good and the service is too.", 
        day_of_week:"Humpday Wednesday",
     },  

     {
        bars_name:"The Break Room",
        rating:"4 stars",
        pricing:"$", 
        hours:"Mon-Sun: 10am-2am", 
        reservation:" Reservation not required",
        review:"FULL BAR with 6 pool tables in a comfortable environment. Neighborhood feel, with lots of room to roam",
        day_of_week:"Thirsty Thursdays (dive bars)",
     },  

     {
        bars_name:" The Areo Club Bar",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:"Mon-Sun: 2pm-2am", 
        reservation:" Reservation not required",
        review:" Whiskey bar with attached game room and food truck. The decor is great and there's plenty of indoor and outdoor seating", 
        day_of_week:"Thirsty Thursdays (dive bars)",
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:"", 
        day_of_week:"Thirsty Thursdays (dive bars)",
     },  

     {
        bars_name:"The Star Bar",
        rating:"3.5 stars",
        pricing:"$", 
        hours:"Mon- Sun: 1 PM- 2 AM", 
        reservation:": Reservation not required",
        review:" Great drinks, fast friendly service in a low-key relaxed setting with some of  the best prices in all of San Diego! Specialty Cocktails, Pool, Pinball, and an amazing outside patio", 
        day_of_week:"Thirsty Thursdays (dive bars)",
     },  

     {
        bars_name:" The Watering Hole",
        rating:"4 stars",
        pricing:"$", 
        hours:"Mon-Sun:10 AM- 2AM", 
        reservation:" Reservation not required",
        review:" FULL bar including local craft beer selections on tap, daily drink specials,shot machines, and a wide array of choices to cover almost every want &  need AND you wont have to break the bank to have a good time.", 
        day_of_week:"Thirsty Thursdays (dive bars)",
     },  

     {
        bars_name:"The Hole in the Wall",
        rating:"4.5 stars",
        pricing:"$", 
        hours:"Mon-Wed: Closed, Thur: 4 PM- 10 PM, Fri: 4 PM- 12 AM, Sat: 2:30 PM- 12AM, Sun: 12 PM- 8:00 PM", 
        reservation:" Reservation not required",
        review:"The drinks are huge, the staff is super friendly, and karaoke is a blast.", 
        day_of_week:"Thirsty Thursdays (dive bars)",
     },  

     {
        bars_name:"Common Theory",
        rating:"4 stars",
        pricing:"$", 
        hours:"Monday: Closed, Tues-Thurs & Sunday: 11 am-10 pm, Fri. &  Sat.: 11 am-11pm",
        reservation:"Reservation not required",
        review:"Fun sports bar type vibe. They have a big open area with lots of ventilation if you’re worried about COVID.", 
        day_of_week:"Feel good Friday ( Happy Hours)",
     },  

     {
        bars_name:"Forbidden Cove",
        rating:"4 stars",
        pricing:"$", 
        hours:" S-W:Closed, Th: 5pm-11pm, Fri-Sat: 5pm-12pm", 
        reservation:"Recommended not required",
        review:"An experience you don't want to miss. You walk in and feel like you are transported to a tropical hideaway", 
        day_of_week:"Feel good Friday ( Happy Hours)",
     },  

     {
        bars_name:"Brigantine- Portside Pier",
        rating:"4 stars",
        pricing:"$", 
        hours:" Mon- Sun: 11:00 AM- 10:00 PM", 
        reservation:"",
        review:"", 
        day_of_week:"Feel good Friday ( Happy Hours)",
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     },  
     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     }, 
     
     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     }, 

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     },  

     {
        bars_name:"",
        rating:"",
        pricing:"", 
        hours:"", 
        reservation:"",
        review:""
     }, 




]