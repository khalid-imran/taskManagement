const create = require('./service/create');
const get = require('./service/get');
const update = require('./service/update');
const deleteLabel = require('./service/delete');
const StateController = {
    /**
     * @desc create function called by route to create state
     * @param {Object} req - request object
     * @param {Object} res - response object
     * @access - private
     */
    create: async (req, res) => {
        await create(req, res);
    },
    /**
     * @desc get function called by route to get all or single state
     * @param {Object} req - request object
     * @param {Object} res - response object
     * @access - private
     */
    get: async (req, res) => {
        await get(req, res);
    },
    /**
     * @desc update function called by route to update state
     * @param {Object} req - request object
     * @param {Object} res - response object
     * @access - private
     */
    update: async (req, res) => {
        await update(req, res);
    },
    /**
     * @desc delete function called by route to delete state
     * @param {Object} req - request object
     * @param {Object} res - response object
     * @access - private
     */
    delete: async (req, res) => {
        await deleteLabel(req, res);
    },
};

// Exporting the authentication controller object for use in other modules
module.exports = StateController;