# require 'spec_helper'

# RSpec.describe "comments/edit", type: :view do
#   before(:each) do
#     @comment = assign(:comment, Comment.create!(
#       :body => "MyText",
#       :spot => nil
#     ))
#   end

#   it "renders the edit comment form" do
#     render

#     assert_select "form[action=?][method=?]", comment_path(@comment), "post" do

#       assert_select "textarea[name=?]", "comment[body]"

#       assert_select "input[name=?]", "comment[spot_id]"
#     end
#   end
# end
