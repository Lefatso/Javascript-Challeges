/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.*/

function BMI() {
  let marksMass = 78;
  let marksHeight = 1.69;

  let johnsMass = 95;
  let johnsHeight = 1.95;

  marksBMI = marksMass / marksHeight ** 2;
  johnBMI = johnsMass / johnsHeight ** 2;

  if (marksBMI > johnBMI) {
    markHigherBMI = true;
  } else {
    markHigherBMI = false;
  }
  console.log(markHigherBMI);
}

BMI();
