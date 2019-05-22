'use strict';
const alfy = require('alfy');
const crypto = require('crypto');
const md5 = crypto.createHash('md5');
const result = md5.update(alfy.input).digest('hex');

alfy.output([
	{
		title: 'Md5',
		arg: result,
		subtitle: result
	}
]);
