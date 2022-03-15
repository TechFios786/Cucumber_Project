$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/TechFiosLoginFromDB.feature");
formatter.feature({
  "name": "TechFios Login functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DbLoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "TechFiosStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DbLoginFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DBScenario1"
    }
  ]
});
formatter.step({
  "name": "User enters \"username\" from techfios database",
  "keyword": "When "
});
formatter.match({
  "location": "TechFiosStepDefinition.user_enters_from_techfios_database(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"password\" from techfios database",
  "keyword": "When "
});
formatter.match({
  "location": "TechFiosStepDefinition.user_enters_from_techfios_database(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.match({
  "location": "TechFiosStepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "TechFiosStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});