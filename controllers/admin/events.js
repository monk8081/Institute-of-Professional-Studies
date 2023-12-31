const Events = require('../../models/event');

module.exports.index = async (req, res) => {
    const events = await Events.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('events/index', { events });
};
module.exports.renderNewForm = (req, res) => {
    res.render('events/new');
};
module.exports.createEvent = async (req, res) => {
    const newEvent = new Events(req.body.event);
    await newEvent.save();
    res.redirect(`/admin/events/${newEvent._id}`);
};
module.exports.showEvent = async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id)
    res.render('events/show', { event })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id);
    res.render('events/edit', { event })
};
module.exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const event = await Events.findByIdAndUpdate(id, {...req.body.event});
    res.redirect(`/admin/events/${event._id}`);
};
module.exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    const deleteEvent = await Events.findByIdAndDelete(id);
    res.redirect('/admin/events');
};
