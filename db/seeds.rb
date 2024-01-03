# Create Admin
User.create({
  name: "Agência W3",
  email: "suporte@agenciaw3.digital",
  password: "w3case2022",
  password_confirmation: "w3case2022",
  admin: true,
})

puts "--> ADMIN CRIADO"
