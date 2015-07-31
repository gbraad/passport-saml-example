module.exports = {
	development : {
		app : {
			name : 'Passport SAML strategy example',
			port : 4200
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint : 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
				issuer : 'gnawleinad-passport-saml'
			}
		}
	}
}
