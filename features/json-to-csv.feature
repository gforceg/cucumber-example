Feature: JSON to CSV
	You should be able to convert a json file to csv

	Acceptance Criteria:
	The command should take in a json file and output a csv file
	The user should see instructions if they did not supply a json file
	The user should see an error if the file isn't a json file.
	The user should see an error if:
		* the file does not exist
		* the user does not have access to the file
		* the file does not contain json

	Unresolved Issues:
	How do you handle objects with different properties?
	How do you handle nested objects?

	Scenario: the user provides a valid json file
		Given the file users.json contains
		"""
		[
			{ "name": "Jerry", "jobId": 27 },
			{ "name": "Elaine", "jobId": 17 },
			{ "name": "Kramer", "jobId": 7 },
			{ "name": "George", "jobId": null }
		]
		"""
		When I run: json-to-csv.js users.json
		Then the file users.csv should contain
		"""
		name,jobId
		Jerry,27
		Elaine,17
		Kramer,7
		George,
		"""
