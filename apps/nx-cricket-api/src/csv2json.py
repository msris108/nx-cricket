import csv
import json


# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
	
	# create a list
	data = []
	
	# Open a csv reader called DictReader
	with open(csvFilePath, encoding='utf-8') as csvf:
		csvReader = csv.DictReader(csvf)
		
		# Add each row to the list
		i = 0
		for rows in csvReader:
			if i == 1000: break;
			data.append(rows)
			i += 1


	# Open a json writer, and use the json.dumps()
	# function to dump data
	with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
		jsonf.write(json.dumps(data, indent=4))
		
# Driver Code

# Decide the two file paths according to your
# computer system
csvFilePath = r'CricketDataset.csv'
jsonFilePath = r'CricketDataset.json'

# Call the make_json function
make_json(csvFilePath, jsonFilePath)
