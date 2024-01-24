Feature: Determine lowest temperature

Scenario: 1 is the lowest temperature
	Given an API consumer wants to know the lowest temperature from a list of temperatures
	When our API is invoked with a list of temperatures of which 1 is the lowest
	Then the response will contain 1 as the lowest temperature