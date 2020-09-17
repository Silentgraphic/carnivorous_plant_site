exports.index = (req, res) => {
    res.render('index', { title: 'Testing' });
};

exports.about = (req, res) => {
    res.render('about');
};