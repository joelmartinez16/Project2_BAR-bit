const viewRoutes = require('./view-routes');
// const apiRoutes = require('./api-routes');
const router = require("express").Router();

// router.use("/api", apiRoutes);
router.use(viewRoutes);


module.exports = router;