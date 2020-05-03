# frozen_string_literal: true

json.call(user, :id, :email, :username)
json.token user.generate_jwt