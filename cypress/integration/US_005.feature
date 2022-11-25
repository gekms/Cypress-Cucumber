Feature: US_005 Login page should not be accessible with invalid credentials



# Background:
# Given user is on GMI Bank page
# Then user clicks regitretion button


Scenario: TC_005 User who wants to login with invalid username and password, there should be registration button
  Given user is on Canada Drives Bank page
  Given user clicks Ontario Province button
  And user selects GrandCaravan From Dropdown List
  And user sorts filter from Low to high
  When  user signs up for an account under Grand Caravan Vehicle
  And user pick up avavilble GrandCaravan Vehicle
  And User choose delivery address duration and payment Method