# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name: 'testuser1', email: '123@me.com', password: '123' )

Course.create!(
  name: 'Sgi-WorkBook', 
  completion_time: "85 minutes", 
  description: "This is the example data for the description of the course, this will show on the main course page.",
  value_props: ["amazing", "fantastic", "unbeatable"],
  price: "300 USD"
  )

Segment.create!(
  name: "Commitments",
  module_id: 8,
  course_id: 1
)

Segment.create!(
  name: "Getting this to work",
  module_id: 9,
  course_id: 1
)

Reading.create!(
  title: "Commitments",
  time: 30,
  intro_title: "Honouring your commitments",
  intro_desc: "The focus of this chapter is to deepen the relationship between self and others through a greater understanding of commitments. What is at stake when a commitment is made? It is much more than simply the results of what you say you will do.",
  segment_id: 1
)

Reading.create!(
  title: "Expectations",
  time: 30,
  intro_title: "Expecting the world",
  intro_desc: "The focus of this chapter is to deepen the relationship between self and others through a greater understanding of commitments. What is at stake when a commitment is made? It is much more than simply the results of what you say you will do.",
  segment_id: 1
)

Reading.create!(
  title: "Previously?",
  time: 1333337,
  intro_title: "You guys better work you buttons",
  intro_desc: "The focus of this chapter is to deepen the relationship between self and others through a greater understanding of commitments. What is at stake when a commitment is made? It is much more than simply the results of what you say you will do.",
  segment_id: 1
)

Activity.create!(
  name: "Activity 1",
  time: 30,
  intro_title: "title to activity 1",
  intro_desc: "description of the intro",
  objective: "This is the objective",
  objective_desc: "This is the descriiption",
  instruction_title: "These are the intructions title.",
  instruction_desc: "1. do this, 2. do this",
  segment_id: 1,
)
Activity.create!(
  name: "Activity 2",
  time: 60,
  intro_title: "title to activity 2",
  intro_desc: "description of the intro",
  objective: "This is the objective",
  objective_desc: "This is the descriiption",
  instruction_title: "These are the intructions title.",
  instruction_desc: "1. do this, 2. do this",
  segment_id: 1,
)
Activity.create!(
  name: "Activity 3",
  time: 1337,
  intro_title: "title to activity 3",
  intro_desc: "description of the intro",
  objective: "This is the objective",
  objective_desc: "This is the descriiption",
  instruction_title: "These are the intructions title.",
  instruction_desc: "1. do this, 2. do this",
  segment_id: 1,
)

Skill.create!(
  name: "Creating & Managing commitments",
  segment_id: 1,
  reading_id: 1,
  activity_id: 1,
)

Concept.create!(
  title: "Honouring your commitments",
  content: "The focus of this chapter is to deepen the relationship between self and others through a greater understanding of commitments. What is at stake when a commitment is made? It is much more than simply the results of what you say you will do.",
  reading_id: 1,
  skill_id: 1,
)

ReadingCompletion.create!(
  segment_id: 1,
  reading_id: 1
)

ActivityCompletion.create!(
  segment_id: 1,
  activity_id: 1
)