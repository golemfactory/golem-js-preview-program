import sys
import textdistance
import argparse


# db file has ASCII city name in seond column
# city, city_ascii,	lat, lng, country, iso2, iso3, admin_name, capital, population, id


argParser = argparse.ArgumentParser()
argParser.add_argument('--db', type=str, required=True, help="city db in csv formt")
argParser.add_argument('--w', type=str, required=True, help="word for which we look for similar city name")

args = argParser.parse_args()

try:
  with open(args.db, "r", encoding='utf-8-sig') as f:
    data = f.read()
except:
  print("Could not open: " + args.db)
  exit()

word = args.w.lower()

def distanceL(wordA, wordB):
    return textdistance.levenshtein.normalized_similarity(wordA, wordB)
 
lines = data.split("\n")
lines = lines[1:]

linesSplit = []

for line in lines:
    if len(line) > 0 :
        rec = line.split(",")
        linesSplit.append([rec[1].replace('"',""), #city_ascii
                           rec[4].replace('"',""), #country
                           rec[9].replace('"',""), #population
                           ])

result = []
for line in linesSplit:
    dist = textdistance.levenshtein.normalized_similarity(word, line[0].lower())
    if dist > 0.7:
        result.append([word]+ line + [dist])

result.sort(reverse=True)
print(result)



