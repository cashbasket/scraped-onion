
var moment = require('moment');
var momentTz = require('moment-timezone');
var jstz = require('jstimezonedetect');

function hbsHelpers(hbs) {
	return hbs.create({
		helpers: {
			formatDate: function(datetime, format) {      
				var momentDatetime = moment(datetime);
				var tz = jstz.determine().name();
				var tzTime = momentDatetime.tz(tz);
  
				return tzTime.format(format);
			}
		},
		defaultLayout: 'main'
	});
}

module.exports = hbsHelpers;