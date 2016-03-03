Package.describe({
  name: 'picsoung:accounts-untappd',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Login service for Untappd',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/picsoung/meteor-accounts-untappd',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('picsoung:untappd@1.0.0', ['client', 'server']);

  api.add_files("untappd.js");
});
