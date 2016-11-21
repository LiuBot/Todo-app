# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


todo1 = Todo.create(title: "Doing Laundry", body:"Need to do 5 years' worth of laundry", done: false)
todo2 = Todo.create(title: "Feeding the chickens", body:"Bgaww bgaww bgawww", done: true)
todo3 = Todo.create(title: "Doing surgery on myself", body:"Need to take care of that appendicities", done: false)
todo4 = Todo.create(title: "Crochet scarf for Markov", body:"Need to make a beautiful holiday scarf for him", done: true)
