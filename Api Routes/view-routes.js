const router = require('express').Router();
const { Bars } = require('../Models/Bar-Models/bars.js');
const dayMap = {
  "monday": "Moody Monday",
  "wednesday": 'Humpday Wednesday'
}
// const withAuth = require('../Utilities/auth');

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/sign-up', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get("/", (req, res) => {
  res.render("homepage");
})


router.get("/bars", async(req, res) => {
  const data = await Bars.findAll({});
  const bars = data.map(Bars => Bars.get({ plain: true }))
  res.render("bars",{bars});
})

router.get('/sign-up', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get("/weekdays", (req, res) => {
  res.render("weekdays");
}); 



router.get("/weekdays/:day", async (req, res) => {
  console.log('day of week', req.params.day);
  //use param for db lookup
  console.log(req.params.day)
  const data = await Bars.findAll({
    where: {
      day_of_week: dayMap[req.params.day] 
      

    }
    
  });
<<<<<<< HEAD
})
  router.get("/weekdays/:name", async (req, res) => {
    console.log('sucess', req.params.name);
    //use param for db lookup
    // console.log(req.params.day)
    const data = await Bars.findAll({
      where: {
        bars_name: req.params.name,
        

      }
=======
  
  const bars = data.map(bar => bar.get({ plain: true }))
    console.log(bars)
  res.render('bars', { bars })
});

// const bars = data.map(bar => bar.get({ plain: true }))

//   res.render('bars', { bars })

  // router.get("/bars_name", async (req, res) => {
  //   console.log('sucess', req.params.name);
  //   //use param for db lookup
  //   // console.log(req.params.day)
  //   const data = await Bars.findAll({
  //     where: {
  //       bars_name: req.params.name,
        
  //     }
>>>>>>> 448f0b787cc9d1021b7a8307fbfb1a83807bad97
      
  //   }
  // );
 
  

  //const bars = data.map(bar => bar.get({ plain: true }))

  //res.render('bars', { //bars })



// });



module.exports = router;
