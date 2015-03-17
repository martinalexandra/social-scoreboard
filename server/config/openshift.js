module.exports = {
	server : {
		ip: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
		port: process.env.OPENSHIFT_NODEJS_PORT || 8080
	},
	db: {
		//conn: process.env.OPENSHIFT_MONGODB_DB_URL + '/socialscoreboard'
		conn: 'mongodb://user:123456@ds035260.mongolab.com:35260/socialscoreboard'
	},
	ids: {
		google: {
			client_id:'447322105852-2ho65ghr9amnok0hqums9007944nfaa7.apps.googleusercontent.com',
			client_secret: 'kwl9TtcsOJSnk39FN2sYW6R0',
			callback_url: 'http://socialscoreboard-alexandra123456.rhcloud.com/auth/oauth2callback',
			scopes: ['https://www.googleapis.com/auth/userinfo.profile']
		}
	},
	jwtSecret: 'very insecure secret'
};