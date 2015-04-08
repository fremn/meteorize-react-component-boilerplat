Package.describe({
  name: 'metero_developer_account:package_name',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'ReactJS [Component] port for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.use('reactjs:react@0.2.1', 'client');
  api.addFiles('griddle-react.js', 'client');
  // api.export(['Griddle'], 'client'); it exports undefined
});

Package.onTest(function(api) {
  api.use('firfi:griddle-react');
  api.addFiles('griddle-react-tests.js');
});
