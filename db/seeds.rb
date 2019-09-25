25.times do
    name = Faker::FunnyName.two_word_name
    avatar = Faker::Avatar.image(slug: name, size: "100x400", format: "png", set: "set3")
  Friend.create(name: name, avatar: avatar)
end

puts "25 Friends Created"