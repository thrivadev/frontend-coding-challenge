const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/users', (req, res) => {
  if (!checkHeaders(req, res)) {
    return
  }

  body = req.body
  if (body.user) {
    const fieldsCheck = checkUserFields(body.user, res)
    const valuesCheck = checkValidFieldValues(body.user, res)

    if (fieldsCheck && valuesCheck) {
      successResponse(res)
    }
  } else {
    error(res, 400, 'Missing user field')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

function successResponse(res) {
  res.status(201);
  res.end()
}

function checkHeaders(req, res) {
  if (req.headers['content-type'] !== 'application/json') {
    error(res, 400, 'Invalid headers')
    return false
  }
  return true
}

function checkUserFields(userAttributes, res) {
  const missingFields = []
  const fields = ['name', 'goals', 'dob', 'diet']

  fields.forEach((fieldName) => {
    if (userAttributes[fieldName] === undefined) {
      missingFields.push(fieldName)
    }
  })

  if (missingFields.length) {
    error(res, 400, `Missing fields: ${missingFields.join(', ')}`)
    return false
  }
  return true
}

function checkValidFieldValues(userAttributes, res) {
  const fields = ['name', 'goals', 'dob', 'diet']
  for (let i = 0; i < fields.length; i++) {
    const fieldName = fields[i];
    const result = eval(`${fieldName}Validation`)(userAttributes[fieldName], res)
    if (result === false) return false
  }
  return true
}

function dietValidation(diet, res) {
  if (typeof diet !== 'string') {
    error(res, 400, 'Diet must be a String')
    return false
  }

  const possibleDiets = ['no', 'coeliac', 'low-carb, high-fat', 'paleo', 'pescatarian', 'plant-based', 'other']

  if (!possibleDiets.includes(diet.toLowerCase())) {
    error(res, 400, "Invalid diet, possible options: 'no', 'coeliac', 'low-carb, high-fat', 'paleo', 'pescatarian', 'plant-based', 'other'")
    return false
  }
  return true
}

function dobValidation(dob, res) {
  if (typeof dob !== 'string') {
    error(res, 400, 'DOB must be a String')
    return false
  }

  if (new Date(dob).toString() === 'Invalid Date') {
    error(res, 400, 'DOB is an invalid date format. Format should match: 2020-09-23T17:05:04.606Z')
    return false
  }
  return true
}

function nameValidation(name, res) {
  if (typeof name !== 'string') {
    error(res, 400, 'Name must be a String')
    return false
  }

  if (name.length === 0) {
    error(res, 400, 'Name must not be an empty string')
    return false
  }
  return true
}
function goalsValidation(goals, res) {
  if (!Array.isArray(goals)) {
    error(res, 400, 'Goals must be an Array')
    return false
  }

  if (goals.length > 4) {
    error(res, 400, 'You are not allowed more than 4 goals')
    return false
  }
  const potentialGoals = ['energy', 'fitness', 'long-term health', 'mood', 'sleep', 'weight']
  const invalidGoals = []
  goals.forEach((goal) => {
    if (!potentialGoals.includes(goal.toLowerCase())) {
      invalidGoals.push(goal)
    }
  })

  if (invalidGoals.length) {
    error(res, 400, `Invalid goals: ${invalidGoals.join(', ')}`)
    return false
  }
  return true
}

function error(res, status,  message) {
  res.status(status);
  res.set('Content-Type', 'application/json')
  res.json({ error: message });
}
