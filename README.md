## Odds Converter

`npm install odds-converter`

` var odds = require('odds-converter')`

### Decimal to American

Example:

`odds.decimal.toAmerican(2.25); // 125.00`

`odds.decimal.toAmerican(1.90); // -111.11`

### Decimal to Fraction

`odds.decimal.toFractional(1.75).simplify(); // (3/4)`

`odds.decimal.toFractional(3.5).simplify(); // (5/2)`

### Fraction to American

`odds.fraction.toAmerican(7,4); // 175`

`odds.fraction.toAmerican(5,6); // -120`

### Fraction to Decimal

`odds.fraction.toDecimal(3,2); // 3.2`

`odds.fraction.toDecimal(1,5); // 1.2`

### American to Decimal

`odds.american.toDecimal(225); // 3.25`

`odds.american.toDecimal(-110); // 1.91`

### American to Fraction

`odds.american.toFractional(225).simplify(); // (9/4)`

`odds.american.toFractional(-125).simplify(); // (4/5)`

