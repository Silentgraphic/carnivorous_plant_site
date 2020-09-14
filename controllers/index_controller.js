exports.index = (req, res) => {
    function test() {
        return 'success';
    }
    res.render('index', { title: 'Testing' });
};

exports.about = (req, res) => {
    res.render('about');
};