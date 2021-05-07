class User <ApplicationRecord
    has_secure_password
    has_many :todos
    validates :name, uniqueness: { message: 'Please use another name'}
end