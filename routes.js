const express=require('express');
const router=express.Router();
const authorization=require('./middleware/authorization');
const showExpense=require('./controller/show');
const createExpense=require('./controller/create');
const deleteExpense=require('./controller/delete');

// - Get expense list
router.get('/expense/list', authorization.authorize, showExpense.list);

// - Get expense details
router.get('/expense/details', authorization.authorize, showExpense.details);

// - Create new expense data
router.post('/expense/details', authorization.authorize, createExpense.details);

// - Edit expense data

// - Delete expense data
router.delete('/expense/details', authorization.authorize, deleteExpense.details);

// - Get total expense by date range

// - Get total expense by category
router.get('/expense/categories', authorization.authorize, showExpense.byCategory);


module.exports=router;