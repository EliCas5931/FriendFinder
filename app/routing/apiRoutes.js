var friends = require("../data/friend.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        var newFriend = req.body;

        for(var i = 0; i < URLSearchParams.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }

        var friendIndex = 0;
        var minDifference

        //Have tutor go over this again to understand abs and why use minDiff
        for (var i = 0; i <friends.length; i++) {
            var totalDifference = 0;
            for(var h = 0; h < friends[i].scores.length; h++) {
                var difference = Math.abs(newFriend.scores[h] - friends[i].scores[h]);
                totalDifference += difference;
            } if (totalDifference < minDifference) {
                friendIndex = i;
                minDifference = totalDifference;
            }
        }

        friends.push(newFriend);
        res.json(friends[friendIndex]);
    });
};