Feature: JSON to CSV
    You should be able to convert a json file to csv

    Acceptance Criteria:
    The command should take in a json file and output a csv file
    The user should see instructions if they do not supply any args
    The user should see an error if:
        * the file does not exist or is inaccessable
        * the file does not json format

    Unresolved Issues:
    How do you handle objects with different properties?
    How do you handle nested objects?

    Scenario: the user provides no args
        When I run: json-to-csv.js
        Then there should not be an error message 
        And I should see the example usage:
        """
        json-to-csv.js [FILE] <output directory>
        """

    Scenario: the user provides a valid json file
        Given the file users.json contains
        """
        [
            { "name": "Art", "jobId": 99 },
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
        Art,99
        Jerry,27
        Elaine,17
        Kramer,7
        George,
        """

    Scenario: the user provides an invalid json file
        Given the file invalid-json.json contains
        """
        this ain't a json file
        """
        When I run: json-to-csv.js invalid-json.json
        Then I should see the error message:
        """
        unable to parse file -- is this valid json?
        """

    Scenario: the user provides a file that does not exist
        Given the file non-existent.json does not exist
        When I run: json-to-csv.js non-existent.json
        Then I should see the error message:
        """
        unable to open the file -- does it exist? do you have permission?
        """
