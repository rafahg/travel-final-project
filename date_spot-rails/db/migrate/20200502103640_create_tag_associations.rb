class CreateTagAssociations < ActiveRecord::Migration[6.0]
  def change
    create_table :tag_associations do |t|
      t.references :spot, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
