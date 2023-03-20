const express=require('express');
const router=express.Router();
const authorization=require('./middleware/authorization');
const userController=require('./controller/expense');

// - Get expense list
// router.get('/expense/list', authorization.authorize, userController.list);

// - Get expense details
router.get('/expense/details', authorization.authorize, userController.details);

// - Create new expense daa
// - Edit expense data
// - Delete expense data
// - Get total expense by date range
// - Get total expense by category


module.exports=router;