class Number
  def self.bin2dec(bin) # class method
    dec = 0
    bin.chars.reverse.each_with_index do |bit, power|
      bit = bit.to_i
      dec += (bit * (2 ** power))
    end
    dec
  end
end

# binary_answer = Number.bin2dec('10101')
