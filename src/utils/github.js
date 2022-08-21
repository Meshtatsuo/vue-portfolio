import {
  getContributions,
  getMax,
  getMean,
  getMaxStreak,
  getCurrentStreak,
  getQuartileBoundaries,
} from "git-activity-stats";

export function getStats() {
  getContributions("meshtatsuo", function (error, contrib) {
    // Contributions array, day as index, number of commit as value
    const contributions = contrib.contributions;
    //First date of the contributions calendar
    const startDate = contrib.startDate;

    //Max. number of contributions per day
    const max = getMax(contributions);

    //Mean of the contributions
    const mean = getMean(contributions);

    console.log(contributions);

    //The longest streak(s)
    const maxStreaks = getMaxStreak(contributions);

    //Current streak
    const currentStreak = getCurrentStreak(contributions);

    //Get quartile boundaries, with the index as the quartile number
    //and the value as the upper bound of the quartile (inclusive)
    const quartileBoundaries = getQuartileBoundaries(contributions);

    return contributions;
  });
}
