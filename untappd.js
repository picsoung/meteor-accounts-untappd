Accounts.oauth.registerService('untappd');

if (Meteor.isClient) {
  Meteor.loginWithUntappd = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Untappd.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.Untappd'],
    forOtherUsers: ['services.Untappd.id']
  });
}
