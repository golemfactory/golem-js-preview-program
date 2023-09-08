"""
find similarities between the input name and an uploaded database

the db file has ASCII city name in second column
city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id

As a reference database, you can use i.e. https://simplemaps.com/data/world-cities.

"""
import argparse
import csv

import textdistance


def levenshtein_distance(word_a, word_b):
    return textdistance.levenshtein.normalized_similarity(word_a, word_b)


parser = argparse.ArgumentParser()
parser.add_argument("-d", "--db", type=str, required=True, help="city db in a CSV format")
parser.add_argument("-w", "--word", type=str, required=True, help="a word to find similar city names to")

args = parser.parse_args()

word = args.word.lower()

MIN_DISTANCE = 0.7  # where 1.0 means identical

results = list()

with open(args.db, "r", encoding="utf-8") as f:
    city_reader = csv.reader(f)
    city_reader.__next__()  # skip the initial header line

    for row in city_reader:
        dist = textdistance.levenshtein.normalized_similarity(word, row[1].lower())
        if dist > MIN_DISTANCE:
            # add to results: word, city name, country, population, distance
            results.append([word] + [row[0], row[4], row[9]] + [dist])

# sort by the similarity, starting from the most similar
results.sort(key=lambda r: r[4], reverse=True)

print(results)
