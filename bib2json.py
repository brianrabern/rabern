import bibtexparser
import json


# give the input BibTeX file name and output JSON file name
bibtex_input = "landon-pubs.bib"
json_output = "landon-pubs.json"

# whether to include the BibTeX field in the JSON output
include_bibtex = True

# load the BibTeX file
with open(bibtex_input, "r") as bibtex_input:
    bib_database = bibtexparser.load(bibtex_input)


# function to convert a JSON entry back to BibTeX format
def json_to_bibtex(entry):
    bibtex = f"@{entry['ENTRYTYPE']}{{{entry['ID']},\n"
    for key, value in entry.items():
        if key not in ["ENTRYTYPE", "ID"]:
            bibtex += f"    {key} = {{{value}}},\n"
    bibtex = bibtex.rstrip(",\n") + "\n}\n\n"
    return bibtex


# add bibtex field to each JSON entry if requested
if include_bibtex:
    for entry in bib_database.entries:
        entry["bibtex"] = json_to_bibtex(entry)

# write the JSON file
with open(json_output, "w") as json_file:
    json.dump(bib_database.entries, json_file, indent=4)


print(f"The BibTeX input file has been converted to '{json_output}'")
