const scorePatient = ({age, location, acceptedOffers, canceledOffers, averageReplyTime}, practiceLocation) => {
  let score = 0

  if (age > 50) {
    score += 1
  }

  if (nearPractice(location, practiceLocation)) {
    score += 1
  }

  if (acceptedOffers > 75) {
    score += 3
  } else if (acceptedOffers > 50) {
    score += 2
  } else if (acceptedOffers > 25) {
    score += 1
  }

  if (canceledOffers < 50) {
    score += 3
  } else if (canceledOffers < 75) {
    score += 2
  } else if (canceledOffers < 100) {
    score += 1
  }

  if (averageReplyTime < 2000) {
    score += 2
  } else if (averageReplyTime < 2500) {
    score += 1
  }

  return score
}

const nearPractice = (location, practiceLocation) => {
  const y = Math.abs(Number(location.longitude) - Number(practiceLocation.longitude))
  const x = Math.abs(Number(location.latitude) - Number(practiceLocation.latitude))
  const distance = Math.sqrt(x**2 + y**2)
  return distance < 100
}

module.exports = scorePatient
