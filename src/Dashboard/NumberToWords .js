import React from 'react';
import '../../src/index.css';

const NumberToWords = ({ number }) => {
  const convertToWords = (num) => {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const convertChunk = (chunk) => {
      let words = '';
      const hundred = Math.floor(chunk / 100);
      const remainder = chunk % 100;

      if (hundred > 0) {
        words += `${units[hundred]} Hundred `;
      }

      if (remainder > 0) {
        if (remainder < 10) {
          words += `${units[remainder]} `;
        } else if (remainder < 20) {
          words += `${teens[remainder - 10]} `;
        } else {
          const tensDigit = Math.floor(remainder / 10);
          const unitsDigit = remainder % 10;
          words += `${tens[tensDigit]} ${units[unitsDigit]} `;
        }
      }

      return words;
    };

    const chunks = [];
    let remainingNumber = num;

    for (let i = 0; remainingNumber > 0; i++) {
      const chunk = remainingNumber % 1000;
      remainingNumber = Math.floor(remainingNumber / 1000);
      if (chunk > 0) {
        const chunkWords = convertChunk(chunk);
        const suffix = i > 0 ? ` ${['', 'Thousand ', 'Million', 'Billion'][i]}` : '';
        chunks.push(`${chunkWords}${suffix}`);
      }
    }

    return chunks.reverse().join('');
  };

  const words = convertToWords(number);

  return (
    <div>
      <p className='para-words'> Net Pay Amount in words: {words}</p>
    </div>
  );
};

export default NumberToWords;