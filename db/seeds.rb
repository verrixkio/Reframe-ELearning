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
  name: "Module:8 Commitments",
  course_id: 1
)

Reading.create!(
  title: "Module:8 Commitments",
  time: 30,
  intro_title: "Honouring your commitments",
  intro_desc: "The focus of this chapter is to deepen the relationship between self and others through a greater understanding of commitments. What is at stake when a commitment is made? It is much more than simply the results of what you say you will do.",
  segment_id: 1
)