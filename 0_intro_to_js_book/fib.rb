def fibonacci(n)
  n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
end

puts fibonacci(6)
puts fibonacci(20)