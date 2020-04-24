const renderHome = (req, res) => res.render('index');

const userRegister = (req, res) => { 
    req.session.userName = req.body.name; //Set a session variable manually
    req.flash('userEmail', req.body.email); //Set a session variable using connect-flash
    req.flash('message', 'Now your are registered!');//Set a GLOBAL session variable using connect-flash
    res.redirect('/profile');
};

const userProfile = (req, res) => { 
    const userName = req.session.userName; //Retrieve the session variable manually
    delete req.session.userName; //Delete the session varaibe manually
    const userEmail = req.flash('userEmail')[0]; //Retrieve and delete session variable using flash module
    req.flash('message', 'Now you have been redirected to profile page!')
    res.render('profile', {userName, userEmail});
};

const getProducts = (req, res) => res.render('products');

module.exports = { renderHome , userRegister, userProfile, getProducts};