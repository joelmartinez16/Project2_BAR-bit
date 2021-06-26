const router = require('express').Router();
// const { User } = require('../Models');
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

  res.render('sign-up');
});

router.get("/", (req, res)=> {
  res.render("homepage");
})

router.get("/bars", (req, res)=> {
  res.render("bars");
})

router.get("/weekdays", (req, res)=> {
  res.render("weekdays");
});

router.get("/weekdays/:day", (req,res)=> {
  console.log('day of week', req.params.day);
  //use param for db lookup
  res.render('bars', {bars: [{name: "monday bar 1"}, {name: "monday bar 2"}]})
})



module.exports = router;
