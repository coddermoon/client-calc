const calcBtn = document.getElementById("calcCost");
const totalCost = document.getElementById("totalCost");
const yield = 7;
const differenceYield = 5;
/**
 * var years = ((days)*(thisyear-birthyear)) /((number_of_long_years*366) + ((thisyear-birthyear-number_of_long_years)*365) );
 */

// parse number

const convertNumber = (val) => {
  return (value = parseFloat(val));
};

const calcCost = () => {
  const Property_value = document.getElementById("Property_value").value;
  const years = document.getElementById("years").value;
  const months = document.getElementById("months").value;
  const groundRent = document.getElementById("groundRent").value;

  // convert year
  const totalTime = convertNumber(years) + convertNumber(months) / 12;
 
  const lostRent =
    ((1 - 1 / Math.pow(1 + yield / 100, totalTime)) / yield) * 100 * groundRent;
  const remainingTerm =
    Property_value / Math.pow(1 + differenceYield / 100, totalTime);

  const reminderPropVal =
    Property_value / Math.pow(1 + differenceYield / 100, totalTime + 90);
  // second part
  const landlordValue = remainingTerm - reminderPropVal;

  const landTotal = parseFloat(Property_value) + reminderPropVal;

  const landCurrentInterest = lostRent + remainingTerm;

  // conditional logic
  const label = 0.99;
  let talentedCurrentInterest = 0;
  if (totalTime > 95) {
    talentedCurrentInterest = Property_value * 0.972;
  } else {
    talentedCurrentInterest =
      (0.106 +
        0.894 * (1 - Math.pow(0.972, totalTime)) -
        (-0.002 * totalTime + 0.1706)) *
      Property_value;
  }

  talentedCurrentInterest = talentedCurrentInterest * label;

  // another
  const beforeMarriageValue = landCurrentInterest + talentedCurrentInterest;
  const difference = landTotal - beforeMarriageValue;

  // difference value condition

  let marrageDiffeceValue = 0;
  if (totalTime > 80) {
    marrageDiffeceValue = 0;
  } else {
    marrageDiffeceValue = difference / 2;
  }

  const expectPremiumValue = parseInt(
    lostRent + landlordValue + marrageDiffeceValue
  );
  //    set value
  totalCost.innerText = expectPremiumValue;
  document.getElementById("ground").innerText = groundRent;
  document.getElementById("extended").innerText = Property_value;
  document.getElementById("time").innerText = totalTime.toFixed(1);
};

// onclick function

calcBtn.addEventListener("click", calcCost);
