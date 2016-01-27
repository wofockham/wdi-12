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
end
