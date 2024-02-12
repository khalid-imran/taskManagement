const TaskModel = require("../../../model/Task");
const Joi = require("joi");
const Validator = require("../../../helpers/validator");
const getComments = require("./getComments");
const updateComment = async (req, res) => {
    try {
        const {id, commentId} = req.params
        const {comment} = req.body
        // Defining the schema for request body validation using "Joi"
        const schema = Joi.object({
            comment: Joi.string().required(),
        }).options({abortEarly: false, allowUnknown: true});
        // Validating the request body against the defined schema
        const validator = await schema.validate(req.body);
        // If validation fails, return a 400 Bad Request response with validation errors
        if (validator.error !== undefined) {
            return res.status(400).json(Validator.parseError(validator.error));
        }

        const task = await TaskModel.updateOne(
            { _id: id, "comments._id": commentId },
            { $set: { "comments.$[comment].comment": comment } },
            { arrayFilters: [{ "comment._id": commentId }] }).exec()
        if (task.modifiedCount > 0) {
            const comments = await getComments(id)
            // Returning a 200 OK response with message
            return res.status(200).json({ message: 'Task comment has been created successfully', comments: comments[0].comments, status: 'ok'});
        }
        res.status(400).json({ message: 'Cannot update Task',});
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = updateComment