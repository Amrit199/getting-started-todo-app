const GREETING = 'Hello world docker rocks in the mood!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
