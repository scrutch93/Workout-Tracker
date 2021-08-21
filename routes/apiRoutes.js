const db = require("../models")

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
        .then(workoutInfo => {
            res.json(workoutInfo)
        })
    })

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
        .then(workoutInfo => {
            res.json(workoutInfo)
        })
    })

    app.post('/api/workouts', (req,res) =>{
        db.Workout.create (req).then (dbWorkout =>{
            res.json(dbWorkout)
    
        })
          .catch (err => {
              res.status(400).json(err)
          })
    })

    app.put ('/api/workouts/:id', (req, res))


}


