# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_11_195729) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.integer "time"
    t.string "intro_title"
    t.text "intro_desc"
    t.string "objective"
    t.text "objective_desc"
    t.string "instruction_title"
    t.text "instruction_desc"
    t.bigint "segment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["segment_id"], name: "index_activities_on_segment_id"
  end

  create_table "activity_completions", force: :cascade do |t|
    t.bigint "segment_id"
    t.bigint "activity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_activity_completions_on_activity_id"
    t.index ["segment_id"], name: "index_activity_completions_on_segment_id"
  end

  create_table "concepts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.bigint "reading_id"
    t.bigint "skill_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reading_id"], name: "index_concepts_on_reading_id"
    t.index ["skill_id"], name: "index_concepts_on_skill_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "value_props", default: [], array: true
    t.integer "completion_time"
    t.integer "price"
  end

  create_table "reading_completions", force: :cascade do |t|
    t.bigint "segment_id"
    t.bigint "reading_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reading_id"], name: "index_reading_completions_on_reading_id"
    t.index ["segment_id"], name: "index_reading_completions_on_segment_id"
  end

  create_table "readings", force: :cascade do |t|
    t.string "title"
    t.integer "time"
    t.string "intro_title"
    t.text "intro_desc"
    t.bigint "segment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["segment_id"], name: "index_readings_on_segment_id"
  end

  create_table "segments", force: :cascade do |t|
    t.string "name"
    t.integer "module_id"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_segments_on_course_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.bigint "segment_id"
    t.bigint "reading_id"
    t.bigint "activity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_skills_on_activity_id"
    t.index ["reading_id"], name: "index_skills_on_reading_id"
    t.index ["segment_id"], name: "index_skills_on_segment_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
