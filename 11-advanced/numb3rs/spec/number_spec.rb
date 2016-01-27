require_relative '../number'

describe Number do
  describe '.bin2dec' do
    it 'converts binary to decimal' do
      expect(Number.bin2dec('1101')).to eq 13
      expect(Number.bin2dec('1010')).to eq 10
      expect(Number.bin2dec('0000')).to eq 0
      expect(Number.bin2dec('1111')).to eq 15
      expect(Number.bin2dec('1010011010')).to eq 666
    end
  end

  describe '.dec2bin' do
    it 'converts decimal to binary' do
      expect(Number.dec2bin(13)).to eq '1101'
    end
  end

  describe '.bin2hex' do
    it 'converts binary to hexadecimal' do
      expect(Number.bin2hex("1110111110011")).to eq '1df3'
    end
  end

  describe '.hex2bin' do
    it 'converts hexadecimal to binary' do
      expect(Number.hex2bin('f3')).to eq '11110011'
    end
  end
end
