class CreateSurveyComponents < ActiveRecord::Migration[7.1]
  def change
    create_table :survey_components do |t|
      t.references :survey, null: false, foreign_key: true
      t.string :component_type
      t.integer :position_x
      t.integer :position_y
      t.string :text

      t.timestamps
    end
  end
end
