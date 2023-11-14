# run script to update bib data from philpapers

import requests
import bibtexparser
import json


def fetch_bibtex(url):
    response = requests.get(url)
    response.raise_for_status()  # raise exception if invalid response
    return response.text


def json_to_bibtex(entry):
    bibtex = f"@{entry['ENTRYTYPE']}{{{entry['ID']},\n"
    for key, value in entry.items():
        if key not in ["ENTRYTYPE", "ID"]:
            bibtex += f"    {key} = {{{value}}},\n"
    bibtex = bibtex.rstrip(",\n") + "\n}\n\n"
    return bibtex


def main(url, json_output):
    try:
        raw_bib = fetch_bibtex(url)
        bib_database = bibtexparser.loads(raw_bib)

        for entry in bib_database.entries:
            entry["bibtex"] = json_to_bibtex(entry)
            blah = entry["ID"].split("-", 1)
            ppID = blah[1]
            entry["url"] = f"https://philpapers.org/rec/{ppID}"

        with open(json_output, "w") as json_file:
            json.dump(bib_database.entries, json_file, indent=4)

        print(
            f"Successfully converted BibTeX to JSON. Output saved to {json_output}"  # noqa
        )

    except Exception as e:
        print(f"An unexpected error occurred: {e}")


# Run the script
url = "https://philpapers.org/asearch.pl?freeOnly=&categorizerOn=&subtitle=Papers+matching+%27%40author+Brian+Rabern+%40pubtype+book%27&showCategories=on&search_header=search_header.html&hideAbstracts=off&sqc=&onlineOnly=&ap_c2=&searchStr=%40author+Brian+Rabern+%40pubtype+book&newWindow=&sort=pubYear&ap_c1=&filterByAreas=&proOnly=on&start=0&filterMode=keywords&publishedOnly=on&langFilter=&limit=500&format=bib&jlist=&ap_c1=&ap_c2="  # noqa
json_output = "brian-books.json"
main(url, json_output)
