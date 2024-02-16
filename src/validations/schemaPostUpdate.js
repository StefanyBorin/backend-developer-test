const joi = require('joi');

const schemaPostUpdate = joi.object({
    title: joi.string().required().messages({
        'string.empty': 'The Title field is required.',
        'any.required': 'The Title field is requested and must be a string',
        'string.base': 'The Title field must be a string.',
    }),
    description: joi.string().required().messages({
        'string.empty': 'The Description field is required.',
        'string.base': 'The Description field must be a string.',
        'any.required':
            'The Description field is requested and must be a string.',
    }),

    location: joi.string().required().messages({
        'any.required': 'The Location field is requested and must be a string.',
        'string.empty': 'The Location field is required.',
        'string.base': 'The Location field must be a string.',
    }),
});

module.exports = schemaPostUpdate;
