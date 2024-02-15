const joi = require('joi');

const schemaJob = joi.object({
    company_id: joi.string().guid({ version: 'uuidv4' }).required().messages({
        'string.empty': 'The ID Companie field is required.',
        'string.base': 'The ID Companie field must be a string.',
        'any.required':
            'The ID Companiefield is requested and must be a string',
        'string.guid': 'The ID Company field must be a valid format.',
    }),
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

    notes: joi.string().allow('', null).messages({
        'string.base': 'The Notes field must be a string.',
    }),

    status: joi
        .string()
        .valid('draft', 'published', 'archived', 'rejected')
        .required()
        .messages({
            'string.base': 'The Status field must be a string.',
            'any.only':
                'The Status field must be one of the allowed values: "draft", "published", "archived" or "rejected".',
            'any.required':
                'The Status field is requested and must be a string',
        }),
});

module.exports = schemaJob;
