const express=require('express');
const router=express.Router();
const authorization=require('./middleware/authorization');
const expense=require('./controller/expense');
const user=require('./controller/user');

// - Get expense list
router.get('/expense/list', authorization.authorize, expense.list);

// - Get expense details
router.get('/expense/details', authorization.authorize, expense.details);

// - Create new expense data
router.post('/expense/details', authorization.authorize, expense.create);

// - Edit expense data
router.patch('/expense/details', authorization.authorize, expense.edit);

// - Delete expense data
router.delete('/expense/details', authorization.authorize, expense.delete);

// - Get total expense by date range
router.get('/expense/dates', authorization.authorize, expense.byDateRange);

// - Get total expense by category
router.get('/expense/categories', authorization.authorize, expense.byCategory);


router.get('/user/list', authorization.authorize, user.list);
router.post('/user/list', authorization.authorize, user.list);


module.exports=router;