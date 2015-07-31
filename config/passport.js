var SamlStrategy = require('passport-saml').Strategy

module.exports = function (passport, config) {

	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		done(null, user);
	});

	var callbackUrl = 'http://localhost:' + config.app.port + config.passport.saml.path;
	var strategy = new SamlStrategy(
	  {
	    callbackUrl: callbackUrl,
	    path: config.passport.saml.path,
	    entryPoint: config.passport.saml.entryPoint,
	    issuer: config.passport.saml.issuer
	  },
	  function(profile, done) {
		return done(null,
			{
				id : profile.uid,
				email : profile.email,
				displayName : profile.cn,
				firstName : profile.givenName,
  				lastName : profile.sn
			});
	  }
	);

	config.metadata = strategy.generateServiceProviderMetadata();

	passport.use(strategy);
}
