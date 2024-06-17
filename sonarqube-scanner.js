const scanner = require('sonarqube-scanner').default;

scanner(
  {
    serverUrl: 'http://localhost:9001',
    options: {
      'sonar.login': 'sqa_19ca69b1fa5d1e481aab0b352956f61d46d7376d',
      'sonar.projectKey': 'SonarAnalyzer:excoder-store',
      'sonar.projectBaseDir': '.',
      'sonar.projectName': 'excoder-store',
      'sonar.projectDescription': 'My Excoder Store',
      'sonar.sources': 'src',
      //'sonar.tests': 'test',
    },
  },
  error => {
    if (error) {
      console.error(error);
    }
    process.exit();
  },
);