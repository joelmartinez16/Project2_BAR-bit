
const sequelize = require("../Configuration/connection")
const  {Bars} = require("../Models/Bar-Models/bars.js");

const BarData = [  
    
    { 
        bars_name:"C Level", 
        rating: "4.5 stars",
        pricing: "$$",
        hours: "Sun- Thurs: 11:30 AM- 9:00 PM, Fri & Sat: 11:30 AM- 9:30 PM;", 
        reservation: "Takes Reservations",
        review: "Great place for a celebration for any occasion. Beautiful view, great service, and good food.",
        day_of_week: "Moody Monday",
     }, 

     { 
         bars_name:" Belgian Beer & Waffle",
         rating:"4.5 stars",
         pricing:"$$", 
         hours:" Mon- Sun: 9:00 AM- 3:00 PM;", 
         reservation:"No reservations, first come first served",
         review:"European Brasserie with an all-day, counter-service menu ranging from savory  waffle sandwiches, burger, chicken and waffles, and a waffle riff on avocado toast to waffles topped with ice cream, fruits, and sweet sauces.", 
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
        reservation:"Recommended not required",
        review:"A trendy beautiful restaurant right on the water near the Star of India ship.Vibe is great and customer service is super on point", 
        day_of_week:"Feel good Friday ( Happy Hours)",
     },  

     {
        bars_name:" Level 9 Rooftop Bar",
        rating:"4 stars",
        pricing:"$$", 
        hours:" Sun- Wed: Closed, Thurs- Sat: 5:00 PM- 9:30 PM;", 
        reservation:" Reservation not required",
        review:"A trendy beautiful restaurant right on the water near the Star of India ship. Vibe is great and customer service is super on point ", 
        day_of_week:"Feel good Friday ( Happy Hours)", 
     },  
     {
        bars_name:"Seven Grand",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:" Mon-Sun: 4:00 PM- 2:00 AM", 
        reservation:"Recommended noot required",
        review:" this spot isn't all about bells and whistles it's just about having a good cocktail and enjoying the company you're with. The prices are extremely  affordable especially with all the work that goes in to every drink.", 
        day_of_week:"Feel good Friday ( Happy Hours)", 
     }, 
     
     {
        bars_name:"ALTITUDE Sky lounge",
        rating:"4 stars",
        pricing:"$$", 
        hours:"Sunday/Monday: Closed, T-Th: 5pm-12am, Friday/Saturday: 5pm-1am", 
        reservation:" No reservations, first come first served",
        review:"Great place to grab some drinks, take in the scenic view, and watch a  baseball game”, “a nice gem with a beautiful view and cool staff in the city", 
        day_of_week:"Saturday Night Feels ( A night out/ Saturday Nightlife)",
     },  

     {
        bars_name:" The Nolen",
        rating:"4 stars",
        pricing:"$$", 
        hours:"Mon- Thurs: 5:00 PM- 12:00 AM, Fri & Sat: 5:00 PM- 1:00 AM, Sun: 11:00AM- 2:00 PM/ 5:00 PM-11:00 PM", 
        reservation:" Reservation Required",
        review:"The Nolen rooftop bar and lounge is a downtown San Diego destination for local and visiting imbibers alike. Enjoy our modern, yet timeless cocktail menu while taking in all the beauty of America's Finest City", 
        day_of_week:"Saturday Night Feels ( A night out/ Saturday Nightlife)",
     },  

     {
        bars_name:"Top of the Hyatt",
        rating:"4 stars",
        pricing:"$$$", 
        hours:"Fri & Sat: 4:00 PM- 10:00 PM", 
        reservation:"No reservations, first come first served",
        review:"Top of the Hyatt is a 40th floor sky lounge with panoramic views of San Diego and the Pacific Ocean featuring specialty cocktails, light fare and dessert", 
        day_of_week:"Saturday Night Feels ( A night out/ Saturday Nightlife)",
     },  

     {
        bars_name:". Polite Provisions",
        rating:" 4.5 stars;",
        pricing:"$$", 
        hours:"Mon- Thurs: 4:00 PM- 2:00 AM,  Fri-Sun: 3:00 PM- 2:00 AM", 
        reservation:" No reservations, first come first served",
        review:"The bar has a cool decor and lots of seating with barriers in between areas with lots of fresh air blowing through. huge drink selection with several mixed   drinks on tap",
        day_of_week:"Saturday Night Feels ( A night out/ Saturday Nightlife)"
     },  

     {
        bars_name:". Harbor & Sky Rooftop Bar and Lounge",
        rating:"3.5 stars",
        pricing:"$", 
        hours:"Mon & Tues: Closed, Wed- Fri: 5:00 PM- 10:00 PM, Sat & Sun: 11:00 AM-10:00 PM", 
        reservation:" No reservations, first come first served",
        review:"Harbor & Sky is San Diego's newest rooftop lounge. With some of the city's   most amazing views and plenty of space to relax and unwind, it is a must for  visitors and locals alike. With sweeping views of San Diego Bay and sitting  above Lane Field, it's pure San Diego chill", 
        day_of_week:"Saturday Night Feels ( A night out/ Saturday Nightlife)",
     },  

     {
        bars_name:"Breakfast Bitch- San Diego",
        rating:"4 stars",
        pricing:"", 
        hours:" Mon- Thurs: 8:00 AM- 1:00 PM, Fri: 8:00 AM-2:00 PM, Sat- Sun: 8:00 AM-3:00 PM", 
        reservation:"Not required",
        review:" Combining comfort food, good music, and table games with a hip and fun vibe offering a one of a kind experience", 
        day_of_week:"Self Care Sunday (top brunch locations)",
     },  

     {
        bars_name:"Morning Glory",
        rating:"4 stars",
        pricing:"$$", 
        hours:"Mon- Fri: 8:00 AM- 3:00 PM, Sat & Sun: 8:00 AM- 4:00 PM", 
        reservation:"First come first served",
        review:"“What a stunning beautiful place to experience a really nice atmosphere, along  side QUALITY SERVICE, Beautiful Faces, DELICIOUS FOOD + Drinks + great Music, almost makes you feel like your in a night club with royal service", 
        day_of_week:"Self Care Sunday (top brunch locations)",
     }, 

     {
        bars_name:"Crushed",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:"Mon-Thurs: 10:00 AM- 8:00 PM, Fri- Sun: 10:00 AM-9:00 PM", 
        reservation:"First come first served",
        review:"Crushed brings an awesome Brunch and Dinner to Pacific Beach! Where you   can enjoy a variety of craft cocktails, local beer, unique mimosas, and great wine in a neighborhood atmosphere", 
        day_of_week:"Self Care Sunday (top brunch locations)",
     },  

     {
        bars_name:" Snooze, an A.M. Eatery",
        rating:"4.5 stars",
        pricing:"$$", 
        hours:" Mon- Fri: 6:30 AM- 2:30 PM,  Sat & Sun: 6:30 AM- 4:00 PM", 
        reservation:" First come first served",
        review:"Stop by for delicious pancakes, french toast, benedicts, breakfast burritos,  oatmeal, breakfast sandwiches, bacon & more. From paleo to vegetarian &  vegan or dairy free & gluten free friendly, we'll happily accommodate food allergies & diets", 
        day_of_week:"Self Care Sunday (top brunch locations)",
     }, 
     {
        bars_name:" Breakfast & Bubbles",
        rating:"3.5 stars",
        pricing:"$$", 
        hours:" Mon: Closed, Tues- Sun: 8:30 AM- 3:00 PM", 
        reservation:"First come first served",
        review:"“Absolutely exceptional service! The food was to die for", 
        day_of_week:"Self Care Sunday (top brunch locations)",
     },  
]
const Barseed = () => {
   sequelize.sync({force:true}).then(async ()=> {
       try{
           console.log("No longer undefined",Bars);
           await Bars.bulkCreate(BarData);
           console.log("seeded")
       }catch(err){
           console.log(err)
       }
   })
}


