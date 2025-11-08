def repeatedCharacters(str)
  str .downcase
      .split('')
      .uniq
      .map { |c| [c, str.downcase.count(c)] }
      .filter { |c| c[1] > 1 }
      .to_h
end

puts repeatedCharacters('Programming')    # { r: 2, g: 2, m: 2 }
puts repeatedCharacters('Combination')    # { o: 2, i: 2, n: 2 }
puts repeatedCharacters('Pet')            # {}
puts repeatedCharacters('Paper')          # { p: 2 }
puts repeatedCharacters('Baseless')       # { s: 3, e: 2 }