angular.module('fantasyApp.services.nfl', [])
  .factory('NFL', function() {
    var NFL = {};
    NFL.teams = [
    {"abbr":"ARI", "team":"Arizona",        "mascot":"Cardinals",   "conference":"NFC", "division":"West",   "wins":"10",   "losses":"6", "ties":"0"},
    {"abbr":"ATL", "team":"Atlanta",        "mascot": "Falcons",    "conference":"NFC", "division": "South",   "wins":"4",   "losses":"12", "ties":"0"},
    {"abbr":"BAL", "team":"Baltimore",      "mascot": "Ravens",     "conference":"AFC", "division": "North",   "wins":"8",   "losses":"8", "ties":"0"},
    {"abbr":"BUF", "team":"Buffalo",        "mascot": "Bills",      "conference":"AFC", "division": "East",   "wins":"6",   "losses":"10", "ties":"0"},
    {"abbr":"CAR", "team":"Carolina",       "mascot": "Panthers",   "conference":"NFC", "division": "South",   "wins":"12",   "losses":"4", "ties":"0"},
    {"abbr":"CHI", "team":"Chicago",        "mascot": "Bears",      "conference":"NFC", "division": "North",   "wins":"7",   "losses":"9", "ties":"0"},
    {"abbr":"CIN", "team":"Cincinnati",     "mascot": "Bengals",    "conference":"AFC", "division": "North",   "wins":"11",   "losses":"5", "ties":"0"},
    {"abbr":"CLE", "team":"Cleveland",      "mascot": "Browns",     "conference":"AFC", "division": "North",   "wins":"4",   "losses":"12", "ties":"0"},
    {"abbr":"DAL", "team":"Dallas",         "mascot": "Cowboys",    "conference":"NFC", "division": "East",   "wins":"8",   "losses":"8", "ties":"0"},
    {"abbr":"DEN", "team":"Denver",         "mascot": "Broncos",    "conference":"AFC", "division": "West",   "wins":"13",   "losses":"3", "ties":"0"},
    {"abbr":"DET", "team":"Detroit",        "mascot": "Lions",      "conference":"NFC", "division": "North",   "wins":"7",   "losses":"9", "ties":"0"},
    {"abbr":"GB",  "team":"Green Bay",      "mascot": "Packers",    "conference":"NFC", "division": "North",   "wins":"8",   "losses":"7", "ties":"1"},
    {"abbr":"HOU", "team":"Houston",        "mascot": "Texans",     "conference":"AFC", "division": "South",   "wins":"2",   "losses":"14", "ties":"0"},
    {"abbr":"IND", "team":"Indianapolis",   "mascot": "Colts",      "conference":"AFC", "division": "South",   "wins":"11",   "losses":"5", "ties":"0"},
    {"abbr":"JAC", "team":"Jacksonville",   "mascot": "Jaguars",    "conference":"AFC", "division": "South",   "wins":"4",   "losses":"12", "ties":"0"},
    {"abbr":"KC",  "team":"Kansas City",    "mascot": "Chiefs",     "conference":"AFC", "division": "West",   "wins":"11",   "losses":"5", "ties":"0"},
    {"abbr":"MIA", "team":"Miami",          "mascot": "Dolphins",   "conference":"AFC", "division": "East",   "wins":"8",   "losses":"8", "ties":"0"},
    {"abbr":"MIN", "team":"Minnesota",      "mascot": "Vikings",    "conference":"NFC", "division": "North",   "wins":"5",   "losses":"10", "ties":"0"},
    {"abbr":"NE",  "team":"New England",    "mascot": "Patriots",   "conference":"AFC", "division": "East",   "wins":"12",   "losses":"4", "ties":"0"},
    {"abbr":"NO",  "team":"New Orleans",    "mascot": "Saints",     "conference":"NFC", "division": "South",   "wins":"11",   "losses":"5", "ties":"0"},
    {"abbr":"NYG", "team":"New York",       "mascot": "Giants",     "conference":"NFC", "division": "East",   "wins":"7",   "losses":"9", "ties":"0"},
    {"abbr":"NYJ", "team":"New York",       "mascot": "Jets",       "conference":"AFC", "division": "East",   "wins":"8",   "losses":"8", "ties":"0"},
    {"abbr":"OAK", "team":"Oakland",        "mascot": "Raiders",    "conference":"AFC", "division": "West",   "wins":"4",   "losses":"12", "ties":"0"},
    {"abbr":"PHI", "team":"Philadelphia",   "mascot": "Eagles",     "conference":"NFC", "division": "East",   "wins":"10",   "losses":"6", "ties":"0"},
    {"abbr":"PIT", "team":"Pittsburgh",     "mascot": "Steelers",   "conference":"AFC", "division": "North",   "wins":"8",   "losses":"8", "ties":"0"},
    {"abbr":"SD",  "team":"San Diego",      "mascot": "Chargers",   "conference":"AFC", "division": "West",   "wins":"9",   "losses":"7", "ties":"0"},
    {"abbr":"SEA", "team":"Seattle",        "mascot": "Seahawks",   "conference":"NFC", "division": "West",   "wins":"13",   "losses":"3", "ties":"0"},
    {"abbr":"SF",  "team":"San Francisco",  "mascot": "49ers",      "conference":"NFC", "division": "West",   "wins":"12",   "losses":"4", "ties":"0"},
    {"abbr":"STL", "team":"St. Louis",      "mascot": "Rams",       "conference":"NFC", "division": "West",   "wins":"7",   "losses":"9", "ties":"0"},
    {"abbr":"TB",  "team":"Tampa Bay",      "mascot": "Buccaneers", "conference":"NFC", "division": "South",   "wins":"4",   "losses":"12", "ties":"0"},
    {"abbr":"TEN", "team":"Tennessee",      "mascot": "Titans",     "conference":"AFC", "division": "South",   "wins":"7",   "losses":"9", "ties":"0"},
    {"abbr":"WAS", "team":"Washington",     "mascot": "Redskins",   "conference":"NFC", "division": "East",   "wins":"3",   "losses":"13", "ties":"0"}
    ];
    NFL.positions = [
    {"abbr":"QB",   "pos":"Quarterback"},
    {"abbr":"RB",   "pos":"Runningback"},
    {"abbr":"WR",   "pos":"Wide Receiver"},
    {"abbr":"TE",   "pos":"Tight End"},
    {"abbr":"K",    "pos":"Kicker"},
    {"abbr":"D/ST", "pos":"Defense/Special Teams"}
    ];

    return NFL;
  });